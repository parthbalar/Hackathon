import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo"><a href="/"><img src="/logo.png" alt="Logo" /></a></div>  
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}