import React, { useState, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const styles = {
  socialIcon: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
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
  refreshIcon: {
    backgroundColor: "#2d2d2d",
    borderRadius: "50%",
    fontSize: "2rem",
    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 1)",
    cursor: "pointer",
    padding: "0.5rem",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
    color: "#fff",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: "sans-serif",
  },
};

const SocialIcons = () => (
  <>
    <Link href="https://github.com/swiftugandan/quizmastr">
      <FontAwesomeIcon
        icon={faGithub}
        style={{ ...styles.socialIcon, marginLeft: "0px" }}
        aria-label="GitHub"
      />
    </Link>
    <FontAwesomeIcon
      icon={faTwitter}
      style={styles.socialIcon}
      aria-label="Twitter"
    />
  </>
);

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isBrowser = typeof window !== "undefined";

  const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const currentYear = new Date().getFullYear();

  return (
    <div style={styles.footer}>
      <div style={styles.flexContainer}>
        <div style={styles.leftContainer}>
          <p style={{ margin: 0 }}>© {currentYear}</p>
        </div>
        {isVisible && (
          <div style={styles.centreContainer}>
            <FontAwesomeIcon
              icon={faRefresh}
              style={styles.refreshIcon}
              onClick={handleRefresh}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0px 0px 1px 2px #3e8e41")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0px 4px 4px rgba(0, 0, 0, 0.25)")
              }
            />
          </div>
        )}
        <div style={styles.rightContainer}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};
