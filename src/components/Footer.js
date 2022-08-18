import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div>
      <div
        style={{
          padding: "1rem",
          marginTop: "1vh",
          backgroundColor: "orange",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        Developed by Manish with ❤️
      </div>
    </div>
  );
}

export default Footer;
