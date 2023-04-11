import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#2d2d2d",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0 }}>© 2023 All rights reserved</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} />
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "10px" }} />
        </div>
      </div>
    </div>
  );
};
