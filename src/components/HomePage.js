import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../HomePage.css";
import { UserContext } from "../App";

function HomePage() {
  const [name, setName] = useState("Customer");
  let history = useHistory();

  const { user, setUser } = useContext(UserContext); //pulling the global context from app.js

  const handleChange = (e) => {
    setName(e.target.value);
    setUser(e.target.value);
  };
  return (
    <div className="welcome">
      <h1>
        Welcome to your pizza place,{" "}
        <span style={{ color: "orange" }}>Dear {name}</span>
      </h1>
      <br />
      <form>
        <input type="Text" placeholder="Your name" onChange={handleChange} />
      </form>
      <p>
        Please proceed forward using the button below to customize your pizza.
      </p>
      <button
        style={{
          background: "orange",
          borderRadius: "20px",
          marginTop: "100px",
          fontSize: "20px",
          fontWeight: 600,
          cursor: "pointer",
          padding: "20px 20px",
        }}
        type="submit"
        onClick={() => history.push("/customize")}
      >
        Proceed
      </button>
    </div>
  );
}

export default HomePage;
