import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function LandingPage() {
  return (
    <div className="container">
      <h1 className="tittle">¡Welcome to HenryGames!</h1>
      <h2 className="sub-tittle">This is a website for Gamers</h2>
      <p className="content">
        ¡You can find and view the most popular games in the world!
      </p>
      <Link to="/home">
        <button className="btn-land"> Get Started </button>
      </Link>
    </div>
  );
}