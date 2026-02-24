import "react-toastify/dist/ReactToastify.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import ShareIcon from "@mui/icons-material/Share";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { saveAs } from "file-saver";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import { getAvatar, getNameCard } from "../../api/admin/apiProfile";
import { sendEmail } from "../../api/email/apiSendEmail";
import LayoutUser from "../../components/home/LayoutUser";
import ExcelCard from "../../components/users/ExcelCard";
import logo from "../../public/logo.png";
import styles from "../../styles/view.module.css";
import { logo64 } from "../../utils/logo64";

function Name() {
  const [profile, setProfile] = React.useState<any>();
  const router = useRouter();
  const { name } = router.query;
  React.useEffect(() => {
    if (name) {
      getNameCard(String(name)).then((main) => setProfile(main));
    }
  }, [name]);
  const imageToBase64 = async (url: string) => {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const base64Data = Buffer.from(response.data, "binary").toString("base64");
    return base64Data;
  };
  const changeVCard = async (url: string) => {
    const web = "https://www.ncc.plus";
    const company = "NCCPLUS VIETNAM JSC";
    const imageBase64 = url ? await imageToBase64(url) : logo64;
    const vcardContent = `
BEGIN:VCARD
VERSION:3.0
N;CHARSET=UTF-8:;${profile?.Name};;;
FN,CHARSET=UTF-8:${profile?.Name}
TEL;TYPE=CELL,voice:${profile?.Phone}
EMAIL;TYPE=PREF,INTERNET:${profile?.Email}
URL:${web}
TITLE:${profile?.Title}
ORG:${company}
PHOTO;TYPE=JPG;ENCODING=B:${imageBase64}
END:VCARD`;
    return vcardContent;
  };
  const handleDownloadVCardPhone = async () => {
    const url = await getAvatar(String(name));
    const vcardContent = await changeVCard(url);
    const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, `${profile?.NameId}.vcf`);
  };

  const handleClickEmail = () => {
    if (profile?.Name && name) {
      const emailAddress = "";
      const emailSubject = `Share VCard`;
      const urlPage = `${process.env.NEXT_PUBLIC_BASE_URL}/view/${name}`;
      const emailBody = `Xin chào, dưới đây là vCard của ${profile?.Name}:\n${urlPage}\n`;
      const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(
        emailSubject,
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    }
  };
  const width = window.innerWidth * 0.75;
  const height = window.innerHeight * 0.75;
  const top = (window.innerHeight - height) / 2;
  const left = (window.innerWidth - width) / 2;
  const windowOptions = `
  left=${left},
  top=${top},
  width=${width},
  height=${height},
  menubar=no,
  toolbar=no,
  location=no,
  resizable=yes,
  scrollbars=yes
`;
  const handleClickFacebook = () => {
    if (profile?.Name && name) {
      const urlPage = `${process.env.NEXT_PUBLIC_BASE_URL}/view/${name}`;
      const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        urlPage,
      )}`;
      window.open(facebookShareLink, "_blank", windowOptions);
    }
  };

  const handleClickTwitter = () => {
    if (profile?.Name && name) {
      const tweetText = `${process.env.NEXT_PUBLIC_BASE_URL}/view/${name}`;
      const twitterShareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText,
      )}`;
      window.open(twitterShareLink, "_blank", windowOptions);
    }
  };

  const [openShare, setOpenShare] = React.useState(false);
  const [openDownload, setOpenDownload] = React.useState(false);
  const [openDownloadEmail, setOpenDownloadEmail] = React.useState(false);
  const [text, setText] = React.useState("");
  const [openClickCopy, setOpenClickCopy] = React.useState(false);
  const handleClickCopy = async () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/view/${name}`;
    await navigator.clipboard.writeText(textToCopy);
    setOpenClickCopy(true);
    setTimeout(() => {
      setOpenClickCopy(false);
    }, 800);
  };
  const [loadingSend, setLoadingSend] = React.useState(false);
  const handleClickSendEmail = async (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(value)) {
      const url = await getAvatar(String(name));
      const vCard = await changeVCard(url);
      setLoadingSend(true);
      sendEmail({
        email: text,
        vCard: vCard,
        nameFile: name,
        name: profile?.Name,
      }).then((data) => {
        if (data) {
          setOpenDownloadEmail(false);
          setOpenDownload(false);
          toast.success(data?.message);
          setLoadingSend(false);
        }
      });
    } else {
      toast.error("Not an email.");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>Business Card App</title>
      </Head>
      <LayoutUser></LayoutUser>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "50px" }}
      >
        {profile && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
        {profile && (
          <div className={styles.divMainView}>
            <Fab onClick={() => setOpenShare(true)} sx={{ width: "45px", height: "45px" }}>
              <ShareIcon />
            </Fab>
            <Fab
              onClick={() => setOpenDownload(true)}
              sx={{ width: "45px", height: "45px", backgroundColor: "#f44336d9", color: "#cacbcd" }}
            >
              <DownloadIcon />
            </Fab>
          </div>
        )}
        <Dialog
          open={openDownload}
          onClose={() => {
            setOpenDownload(false);
            setOpenDownloadEmail(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            {!openDownloadEmail && (
              <div className={styles.divDownload}>
                <div className={styles.headerSharePage}>
                  <h1 className={styles.headerShareH1}>Save Contact Data</h1>
                  <ClearIcon
                    onClick={() => {
                      setOpenDownload(false);
                      setOpenDownloadEmail(false);
                    }}
                    className={styles.headerShareIcon}
                    sx={{ fontSize: "21px", color: "#f44336c4" }}
                  />
                </div>
                <p style={{ margin: "15px 5px" }}>How would you like to save contact data?</p>
                <button
                  onClick={() => setOpenDownloadEmail(true)}
                  disabled={true}
                  className={styles.buttonSharePage}
                >
                  <AttachEmailIcon sx={{ fontSize: "20px", color: "#666b74" }} />
                  <p>Send by Email</p>
                </button>
                <button onClick={handleDownloadVCardPhone} className={styles.buttonSharePage}>
                  <SecurityUpdateIcon sx={{ fontSize: "20px", color: "#666b74" }} />
                  <p>Download vcard</p>
                </button>
              </div>
            )}
            {openDownloadEmail && (
              <div className={styles.divDownload}>
                <div className={styles.headerSharePage}>
                  <ArrowBackIcon
                    onClick={() => setOpenDownloadEmail(false)}
                    className={styles.headerShareIcon}
                    sx={{ fontSize: "21px", color: "#f44336c4" }}
                  />
                  <ClearIcon
                    onClick={() => {
                      setOpenDownload(false);
                      setOpenDownloadEmail(false);
                    }}
                    className={styles.headerShareIcon}
                    sx={{ fontSize: "21px", color: "#f44336c4" }}
                  />
                </div>
                <div style={{ padding: "5px 10px 0 10px" }}>
                  <p className={styles.headerShareH1}>Send by Email</p>
                  <p style={{ margin: "10px 0" }}>Send contact details using email.</p>
                  <input
                    value={text}
                    onChange={(e: any) => setText(e?.target?.value)}
                    placeholder="Write your email..."
                    className={styles.inputSendEmail}
                  />
                  <button
                    onClick={() => handleClickSendEmail(text)}
                    className={styles.buttonSendEmail}
                  >
                    {loadingSend ? (
                      <CircularProgress size={18} sx={{ color: "white", fontWeight: 500 }} />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <Dialog
          open={openShare}
          onClose={() => setOpenShare(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.headerSharePage}>
              <h1 className={styles.headerShareH1}>Share this page</h1>
              <ClearIcon
                onClick={() => setOpenShare(false)}
                className={styles.headerShareIcon}
                sx={{ fontSize: "21px", color: "#f44336c4" }}
              />
            </div>
            <button onClick={handleClickEmail} className={styles.buttonSharePage}>
              <EmailIcon sx={{ fontSize: "20px", color: "#9ca3af" }} />
              <p>Email</p>
            </button>
            <button onClick={handleClickFacebook} className={styles.buttonSharePage}>
              <FacebookIcon sx={{ fontSize: "20px", color: "#0b0b92c4" }} />
              <p>Facebook</p>
            </button>
            <button onClick={handleClickTwitter} className={styles.buttonSharePage}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
              <p>Twitter</p>
            </button>
            <button onClick={handleClickCopy} className={styles.buttonSharePage}>
              <Image src={logo} alt="logo" width={20} height={20} />
              <p
                className={styles.buttonShareURL}
              >{`${process.env.NEXT_PUBLIC_BASE_URL}/view/${name}`}</p>
            </button>
            {openClickCopy === true && <p className={styles.buttonShareCopied}>Copied</p>}
          </DialogContent>
        </Dialog>
        {!profile && <p>If you don't have a card, please contact the administrator!</p>}
      </Grid>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Name;
