import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function YearCard(props) {
  const cardStyle = {
    backgroundColor: "#0885ff4f", // blue background color
    color: "#FFF", // white text color
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "sans-serif",
    transition: "box-shadow 0.3s",
  };

  const titleStyle = {
    fontSize: "28px",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const iconStyle = {
    fontSize: "80px",
    marginBottom: "20px",
  };

  return (
    <Link
      href={`/year/${props.year}`}
      style={cardStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0px 0px 10px 2px rgba(245, 166, 35, 0.75)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)")
      }
    >
      <div style={titleStyle}>{props.title}</div>
      <FontAwesomeIcon icon={props.icon} style={iconStyle} />
      <div>{props.description}</div>
    </Link>
  );
}
