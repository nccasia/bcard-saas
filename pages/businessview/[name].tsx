import ChatIcon from "@mui/icons-material/Chat";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { getAvatar, getNameCard } from "../../api/admin/apiProfile";
import styles from "../../styles/businessview.module.css";

type SocialKey = "Whatsapp" | "Linkedin" | "Mezon" | "Telegram" | "Zalo";

type SocialLink = {
  key: SocialKey;
  label: string;
  value?: string | null;
  color: string;
  icon: React.ReactNode;
  href: string | null;
};

const sanitizePhone = (value: string) => value.replace(/[^\d]/g, "");

const hasProtocol = (value: string) => /^https?:\/\//i.test(value) || /^[a-z]+:\/\//i.test(value);

const buildSocialHref = (key: SocialKey, rawValue?: string | null) => {
  const value = rawValue?.trim();
  if (!value) return null;
  if (hasProtocol(value)) return value;

  if (key === "Whatsapp") {
    const phone = sanitizePhone(value);
    return phone ? `https://wa.me/${phone}` : null;
  }

  if (key === "Zalo") {
    const phone = sanitizePhone(value);
    return phone ? `https://zalo.me/${phone}` : value;
  }

  if (key === "Telegram") {
    const phone = sanitizePhone(value);
    if (value.startsWith("+") && phone) return `tg://resolve?phone=${phone}`;
    return `https://t.me/${value.replace(/^@/, "")}`;
  }
  if (key === "Mezon") {
    return value;
  }

  const linkedinName = value
    .replace(/^@/, "")
    .replace(/^linkedin\.com\/in\//i, "")
    .replace(/^www\.linkedin\.com\/in\//i, "");
  return `https://www.linkedin.com/in/${linkedinName}`;
};

function BusinessViewPage() {
  const router = useRouter();
  const { name } = router.query;
  const [profile, setProfile] = React.useState<any>();
  const [avatar, setAvatar] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!name) return;

    const loadProfile = async () => {
      setIsLoading(true);
      const [card, image] = await Promise.all([getNameCard(String(name)), getAvatar(String(name))]);
      setProfile(card);
      setAvatar(image || card?.Avatar || "");
      setIsLoading(false);
    };

    void loadProfile();
  }, [name]);

  const socialItems: SocialLink[] = [
    {
      key: "Whatsapp",
      label: "WhatsApp",
      value: profile?.Whatsapp,
      color: "#45d06f",
      icon: <WhatsAppIcon fontSize="medium" />,
      href: buildSocialHref("Whatsapp", profile?.Whatsapp),
    },
    {
      key: "Linkedin",
      label: "LinkedIn",
      value: profile?.Linkedin,
      color: "#2f80b9",
      icon: <LinkedInIcon fontSize="medium" />,
      href: buildSocialHref("Linkedin", profile?.Linkedin),
    },
    {
      key: "Mezon",
      label: "Mezon",
      value: profile?.Mezon,
      color: "#5865f2",
      icon: (
        <img
          src="/upload/logo-mezon.img"
          alt="Mezon"
          style={{
            width: 24,
            height: 24,
            objectFit: "contain",
          }}
        />
      ),
      href: buildSocialHref("Mezon", profile?.Mezon),
    },
    {
      key: "Telegram",
      label: "Telegram",
      value: profile?.Telegram,
      color: "#60a5fa",
      icon: <TelegramIcon fontSize="medium" />,
      href: buildSocialHref("Telegram", profile?.Telegram),
    },
    {
      key: "Zalo",
      label: "Zalo",
      value: profile?.Zalo,
      color: "#0a73ff",
      icon: <ChatIcon fontSize="medium" />,
      href: buildSocialHref("Zalo", profile?.Zalo),
    },
  ];
  const socialLinks = socialItems.filter((item) => item.value && item.href);

  return (
    <div className={styles.page}>
      <Head>
        <title>{profile?.Name ? `${profile.Name} | Business View` : "Business View"}</title>
      </Head>
      <div className={styles.hero}>
        <h1 className={styles.heroName}>{profile?.Name || "Business Card"}</h1>
      </div>
      <main className={styles.content}>
        {isLoading ? (
          <p className={styles.empty}>Loading...</p>
        ) : profile ? (
          <>
            <div className={styles.profileCard}>
              <img
                src={avatar || "/user.png"}
                alt={profile?.Name || "Profile image"}
                className={styles.avatar}
              />
              <p className={styles.title}>{profile?.Title || "No title"}</p>
              <span className={styles.arrow}>&rarr;</span>
            </div>
            <h2 className={styles.sectionTitle}>Connect me via</h2>
            <div className={styles.links}>
              {socialLinks.length > 0 ? (
                socialLinks.map((item) => (
                  <a
                    key={item.key}
                    href={item.href || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkButton}
                  >
                    <span className={styles.iconCircle} style={{ backgroundColor: item.color }}>
                      {item.icon}
                    </span>
                    <span className={styles.linkLabel}>{item.label}</span>
                    <span className={styles.linkArrow}>&rarr;</span>
                  </a>
                ))
              ) : (
                <p className={styles.empty}>No social contact links available.</p>
              )}
            </div>
          </>
        ) : (
          <p className={styles.empty}>
            If you don&apos;t have a card, please contact the administrator.
          </p>
        )}
      </main>
    </div>
  );
}

export default BusinessViewPage;
