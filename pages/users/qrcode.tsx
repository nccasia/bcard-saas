import * as htmlToImage from "html-to-image";
import Head from "next/head";
import { useRouter } from "next/router";
import QRCode from "qrcode-generator";
import React from "react";
import Link from "next/link";
import { prisma } from "../../lib/prisma";

function ProfileDetails() {
  const [imageUrl, setImageUrl] = React.useState("");
  const [qrUrl, setQrUrl] = React.useState("");
  const router = useRouter();
  const downloadAsPng = async () => {
    const node = document.getElementById("card");
    if (node) {
      const imgDataUrl = await htmlToImage.toPng(node);
      const link = document.createElement("a");
      link.download = "your-file-name.png";
      link.href = imgDataUrl;
      link.click();
    }
  };
  React.useEffect(()=>{
    const node = document.getElementById("card");
    if(node){
      const width = node.offsetWidth;
      const height = node.offsetHeight;
      htmlToImage.toPng(node, { width, height })
        .then(function (dataUrl) {
          const qr = QRCode(0, 'L'); // 0 = error correction level, 'L' = QR code version
          qr.addData(dataUrl.slice(0, 100)); // truncate dataUrl to first 2000 characters
          qr.make();
          const qrCodeImage = qr.createImgTag(5); // 5 = QR code cell size
          //setImageUrl(dataUrl);
          setQrUrl(qrCodeImage)
        })
        .catch(function (error) {
            console.error('Lỗi:', error);
        });
    }
    const imageNode:any= document.getElementById("my-image");
    const qr = QRCode(0, "L");
    if(imageNode){
      qr.addData(imageNode.src);
      qr.make();
      const qrCodeImage = qr.createImgTag(4);
      //setQrUrl(qrCodeImage)
      console.log(qrCodeImage)
    }
  },[])
 

  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <div id="card">
            <div style={{ width:"300px", height:"150px", backgroundColor:"#ff370096", display: "flex"}}>
              <div style={{ margin: "auto", textAlign: "center", color: "white", fontSize: "14px" }}>
                hello
              </div>
            </div>
            <br></br>
            <div style={{ width: "300px", height: "150px", backgroundColor: "#ff370096", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "white" }}>
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ margin: "auto", textAlign: "center", color: "white", width: "100px", height: "100px" }}>
                  hello
                </div>
              </div>
              <div style={{ margin: "auto", textAlign: "left", color: "white", flex: 1 }}>
                jello
              </div>
            </div>
          </div>
          <br></br>
          <button onClick={downloadAsPng}>Download</button>
          <Link href="/">
            <button
                type="submit"
                className="bg-gray-100 text-black rounded-md px-2 py-1 hover:bg-gray-50 my-2 active:bg-gray-400 text-base"
            >
                Home
            </button>
          </Link>
          {/* <img src={imageUrl} alt="QR Code" id="my-image" /> */}
          <img src={qrUrl} alt="QR Code" width="100px" height="100px"/>
        </>
      )}

    
    </div>
  );
}

export default ProfileDetails;
