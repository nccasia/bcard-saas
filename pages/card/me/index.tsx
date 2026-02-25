import "react-toastify/dist/ReactToastify.css";

import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import EditIcon from "@mui/icons-material/Edit";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fab from "@mui/material/Fab";
import Head from "next/head";
import { useSession } from "next-auth/react";
import React from "react";

import { getNameCard } from "../../../api/admin/apiProfile";
import Header from "../../../components/home/Header";
import QrCode from "../../../components/QrCode";
import ExcelCard from "../../../components/users/ExcelCard";
import MyCardEditDialog from "../../../components/users/MyCardEditDialog";
import styles from "../../../styles/profile.module.css";

function MyCardPage() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = React.useState<any | null>(null);
  const [open, setOpen] = React.useState(true);
  const [editOpen, setEditOpen] = React.useState(false);

  React.useEffect(() => {
    if (status !== "authenticated") return;

    const email = session?.user?.email;
    const nameId = email?.split("@")[0];
    if (!nameId) return;

    const loadProfile = async () => {
      const main = await getNameCard(String(nameId));
      setProfile(main);
    };

    void loadProfile();
  }, [session, status]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const shortName = session?.user?.email?.split("@")[0] || "";
  const link = `${baseUrl}/view/${shortName}`;

  if (status === "loading" || !session) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.boxCard}>
      <Head>
        <title>My Business Card</title>
      </Head>
      <Header isDarkMode={undefined} />
      <div className={styles.profile}>
        {profile ? (
          <div className={styles.container}>
            <div className={styles.divCard}>
              {open && <ExcelCard profile={profile} params={{ exampe: "1" }} />}
              {!open && <QrCode url={link} />}
            </div>
          </div>
        ) : (
          <p style={{ marginTop: "100px" }}>
            If you don&apos;t have a card, please contact the administrator!
          </p>
        )}
      </div>
      <div className={styles.iconSwitch}>
        <Fab onClick={() => setOpen(!open)} sx={{ width: "45px", height: "45px" }}>
          {open ? (
            <QrCodeScannerIcon sx={{ color: "#f44336" }} />
          ) : (
            <ContactEmergencyIcon sx={{ color: "#f44336" }} />
          )}
        </Fab>
      </div>
      <div className={styles.iconSwitch} style={{ bottom: "80px" }}>
        <Fab
          onClick={() => setEditOpen(true)}
          sx={{ width: "45px", height: "45px", backgroundColor: "#1976d2" }}
        >
          <EditIcon sx={{ color: "#fff" }} />
        </Fab>
      </div>
      <MyCardEditDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        shortName={shortName}
        onUpdated={(updated) => setProfile(updated)}
      />
    </div>
  );
}

export default MyCardPage;
