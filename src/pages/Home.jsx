import React from "react";
import "../styles/Home.css";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="https://www.sih.gov.in/img1/SIH2025-logo.png"
            alt="Hackathon Logo"
            className="hero-logo"
          />
          <h1>Internal Hackathon 2025</h1>
          <p>
            Collaborate, code, and create <strong>innovative solutions</strong>{" "}
            in just <b>14 hours!</b>
          </p>
          <a href="/register" className="btn-home">
            Register Now
          </a>
        </div>
      </section>

      {/* Rules Section */}
      <section className="rules">
        <h2 className="section-title">Hackathon Rules</h2>
        <div className="rules-list">
          <div className="rule-card">👥 Each team can have max 6 members.</div>
          <div className="rule-card">📝 All members must register before the event.</div>
          <div className="rule-card">📌 Each team must have one unique project topic.</div>
          <div className="rule-card">⏱️ Hackathon duration is 14 hours, submit before deadline.</div>
          <div className="rule-card">⚖️ Follow coding guidelines and ethical rules.</div>
          <div className="rule-card">🏅 Judge's decisions are final.</div>
          <div className="rule-card">🚫 Plagiarism or misconduct = disqualification.</div>
          <div className="rule-card">🎓 Selected teams will present in Inter College Hackathon.</div>
        </div>

        <div className="rules-btn">
          <a
            href="https://www.sih.gov.in/sih2025PS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-home"
          >
            View Problem Statements
          </a>
        </div>
      </section>
    </div>
  );
}
