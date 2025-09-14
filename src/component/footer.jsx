import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Hackathon | All Rights Reserved</p>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/schedule">Schedule</a>
        <a href="/register">Register</a>
      </div>
    </footer>
  );
}