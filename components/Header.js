import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ toggleVisibility }) => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "64px",
      padding: "0 24px",
      backgroundColor: "hsla(0, 0%, 0%, 0.8)",
      color: "#fff",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "1000",
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
    rightContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "right",
    },
    leftContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "left",
    },
    centreContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftContainer}>
        <Link href="/" style={styles.logo}>
          <FontAwesomeIcon icon={faHome} style={styles.icon} />
        </Link>
      </div>
      <div style={styles.centreContainer}>
        <Link href="/" style={styles.logo}>
          <p style={styles.pageTitle}>Quizmastr</p>
        </Link>
      </div>
      <div style={styles.rightContainer}>
        {/* <Link href="/about" style={styles.link}>
          <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
        </Link> */}
        <button
          style={{ ...styles.link, background: "none", border: "none" }}
          onClick={toggleVisibility}
        >
          <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
        </button>
      </div>
    </header>
  );
};
