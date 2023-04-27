import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
      padding: "0 24px",
      backgroundColor: "#2d2d2d",
      color: "#fff",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: "24px",
      fontWeight: "bold",
    },
    icon: {
      fontSize: "24px",
    },
    links: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
    },
    pageTitle: {
      fontSize: "1.5rem",
      fontFamily: "sans-serif",
      opacity: "0.4",
    },
  };

  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logo}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
      </Link>
      <Link href="/" style={styles.logo}>
        <p style={styles.pageTitle}>Quizmastr</p>
      </Link>
      <nav style={styles.links}>
        <Link href="/about" style={styles.link}>
          <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
        </Link>
      </nav>
    </header>
  );
};
