import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

function Header() {
  return (
    <div style={{ padding: "1rem", background: "black", minHeight: "50%" }}>
      <b
        href="#"
        style={{
          color: "#fccd3d",
          fontWeight: "bold",
          fontSize: "20px",
          display: "inline",
          padding: "14px 16px",
        }}
      >
        Pizza Place
      </b>

      <Link style={{ textDecoration: "none" }} to="/">
        <a
          style={{
            paddingLeft: "50vw",
            color: "#fccd3d",
            fontWeight: "bold",
            fontSize: "20px",
            display: "inline",
          }}
        >
          Home
        </a>
      </Link>
    </div>
  );
}

export default Header;
