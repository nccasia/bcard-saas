import "dotenv/config";

import express from "express";
import next from "next";

import { MezonBotService } from "./services/bot-service";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
  });

  // Start Mezon bot service
  const bot = new MezonBotService();
  await bot.start();

  // Graceful shutdown for the bot client
  const shutdown = async (signal: NodeJS.Signals) => {
    try {
      console.log(`[Server] Application shutting down: ${signal}, stopping Mezon bot...`);
      await bot.stop();
    } catch (err) {
      console.error("[MezonBot] error during shutdown", err);
    } finally {
      process.exit(0);
    }
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  // All other requests go through Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`[Server] Ready on http://localhost:${port} - Express + Next.js`);
  });
}

bootstrap().catch((err) => {
  console.error("[Server] Fatal error during bootstrap", err);
  process.exit(1);
});
