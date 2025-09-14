import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Hackathon</h1>

      <p className="about-intro">
        The <strong>Internal Hackathon 2025</strong> is a platform designed to
        encourage innovation, problem-solving, and teamwork among students. 
        It’s not just a competition – it’s an opportunity to learn, network, 
        and showcase creativity in building real-world solutions.
      </p>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>💡 Innovation</h3>
          <p>
            Teams brainstorm and transform unique ideas into working prototypes
            that solve real challenges.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🤝 Collaboration</h3>
          <p>
            Work together in diverse teams, guided by mentors and experts to
            build impactful projects.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🏆 Recognition</h3>
          <p>
            Present your project to a jury panel, gain recognition, and win
            exciting prizes for your contribution.
          </p>
        </div>
      </div>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire young innovators to create meaningful
          solutions for the future. We believe in empowering students with
          skills, mentorship, and opportunities to bring their ideas to life.
        </p>
      </section>
    </div>
  );
};

export default About;
