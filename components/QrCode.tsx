import React from "react";

const QRCode = ({ url }: any) => {
  const canvasRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    (async () => {
      try {
        const QRCodeStyling = await import("qr-code-styling");
        if (canvasRef.current) {
          const qrCode = new QRCodeStyling.default({
            width: 250,
            height: 250,
            image: "/logo.png",
            dotsOptions: {
              color: "#000000c9",
              type: "rounded",
            },
            imageOptions: {
              crossOrigin: "anonymous",
              margin: 5,
            },
          });
          qrCode.append(canvasRef.current);
          qrCode.update({ data: url });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [url]);
  return (
    <div>
      <div ref={canvasRef} />
    </div>
  );
};

export default QRCode;
