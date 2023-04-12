import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
      marginRight: "8px",
      fontSize: "24px",
    },
    links: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: "1",
      marginLeft: "24px",
    },
    link: {
      marginLeft: "24px",
      textDecoration: "none",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <header style={styles.header}>
      <Link href="/quiz" style={styles.logo}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
      </Link>
      <nav style={styles.links}>
        <Link href="/quiz/about" style={styles.link}>
          <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
        </Link>
        <Link href="/contact" style={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        </Link>
      </nav>
    </header>
  );
};
