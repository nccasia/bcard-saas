import { Excel } from "@prisma/client";
import { ApiMessageAttachment, ChannelMessage, ChannelMessageContent, EMarkdownType, MezonClient } from "mezon-sdk";

import { CARD, renderCardToDataURL } from "./card-canvas";
import { MEZON_EMBED_FOOTER, MEZON_IMAGE_URL } from "../constants/mezon-config";
import { prisma } from "../lib/prisma";
import { getRandomColor } from "../utils/randomColor";

export class MezonBotService {
  private readonly client: MezonClient;

  constructor() {
    this.client = new MezonClient({
      botId: process.env.MEZON_BOT_ID || process.env.MEZON_CLIENT_ID,
      token: process.env.MEZON_BOT_TOKEN,
    });
  }

  async start() {
    await this.client.login();
    this.client.onChannelMessage((message) => {
      if (message?.content?.t?.startsWith("*card")) {
        return this.handleCardMessage(message).catch((error) => {
          console.error("Error handling card message: ", error);
        });
      }
    });
  }

  async stop() {
    this.client.closeSocket();
  }

  async handleCardMessage(message: ChannelMessage) {
    const currentChannel = await this.client?.channels?.fetch(message.channel_id);
    if (!currentChannel || !message?.message_id) {
      return;
    }

    const currentMessage = await currentChannel?.messages?.fetch(message.message_id);
    if (!currentMessage) {
      return;
    }

    const [_, firstOption, secondOption] = message.content?.t?.split(" ") || [];
    const cardName = firstOption || message?.username || message?.clan_nick;
    const cardOption = secondOption?.trim() || firstOption?.trim();

    if (cardOption?.trim() === "-h") {
      return currentMessage.reply(
        this.generateErrorMessage("Generate a business card, example: *card tuan.nguyenngocanh, -t for text card"),
      );
    }

    if (!cardName) {
      return currentMessage.reply(
        this.generateErrorMessage("Please provide a card name, example: *card tuan.nguyenngocanh"),
      );
    }

    const signal = await currentMessage.reply(this.generateErrorMessage("Generating business card... Please wait for a moment"));
    const waitMessage = await currentChannel?.messages?.fetch(signal.message_id);

    const card = await prisma.excel.findUnique({
      where: {
        NameId: cardName,
      },
    });

    if (!card) {
      return waitMessage?.update(this.generateErrorMessage("No card found with the given name: " + cardName));
    }

    if (cardOption?.trim() === "-t") {
      return waitMessage?.update(this.generateCardMessage(card));
    }

    const dataUrl = await renderCardToDataURL(card);
    const attachments: ApiMessageAttachment[] = [
      {
        url: dataUrl,
        filename: `card-${card.NameId}.png`,
        filetype: "image/png",
        width: CARD.width,
        height: CARD.height,
      },
    ];
    return waitMessage?.update({}, undefined, attachments);
  }

  generateErrorMessage(errorMessage?: string) {
    const replyMessage = errorMessage
      ? errorMessage
      : "Cannot process this message. Please try again later";
    const message: ChannelMessageContent = {
      t: replyMessage,
      mk: [
        {
          type: EMarkdownType.PRE,
          s: 0,
          e: replyMessage.length,
        },
      ],
    };
    return message;
  }

  generateCardMessage(card: Excel) {
    const embedMessage = {
      color: getRandomColor(),
      title: `${card.Name}'s Business Card`,
      author: {
        name: card?.Name || "No Name",
        icon_url: card?.Avatar || MEZON_IMAGE_URL,
        url: card?.Avatar || MEZON_IMAGE_URL,
      },
      thumbnail: {
        url: card?.Avatar || MEZON_IMAGE_URL,
      },
      fields: [
        {
          name: `• Short Name`,
          value: `  ${card.NameId}`,
        },
        {
          name: `• Full Name`,
          value: `  ${card.Name}`,
        },
        {
          name: `• Phone`,
          value: `  ${card.Phone}`,
        },
        {
          name: `• Title`,
          value: `  ${card?.Title || "No Information"}`,
        },
        {
          name: `• Address`,
          value: `  ${card?.Address || "No Information"}`,
        },
        {
          name: `• Slogan`,
          value: `  ${card?.Slogan || "No Information"}`,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: MEZON_EMBED_FOOTER,
    };

    const replyMessage: ChannelMessageContent = {
      embed: [embedMessage]
    };

    return replyMessage;
  }
}
