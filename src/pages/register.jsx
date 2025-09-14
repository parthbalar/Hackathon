import React, { useState } from "react";
import "../styles/register.css";

function TeamRegister() {
  const [teamName, setTeamName] = useState("");
  const [topic, setTopic] = useState("");
  const [students, setStudents] = useState([
    { name: "", enrollmentNo: "", department: "", batch: "", email: "", mobile: "" }
  ]);

  // Add new student (max 6)
  const addStudent = () => {
    if (students.length < 6) {
      setStudents([
        ...students,
        { name: "", enrollmentNo: "", department: "", batch: "", email: "", mobile: ""}
      ]);
    } else {
      alert("Maximum 6 members allowed in a team");
    }
  };

  // Handle student input change
  const handleStudentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStudents = [...students];
    updatedStudents[index][name] = value;
    setStudents(updatedStudents);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const payload = { teamName, topic, students };

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Team registered successfully!");
        setTeamName("");
        setTopic("");
        setStudents([{ name: "", enrollmentNo: "", department: "", batch: "", email: "", mobile: ""}]);
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Server error, try again later");
    }
  };

  return (
    <div className="container">
      <h1>Hackathon Team Registration</h1>
      <p className="note">⚠️ Note: Each team must have at least one girl member.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Project Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>

        <h2>Team Members</h2>
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h3>
              Member {index + 1} {index === 0 && <span className="leader-tag">(Team Leader)</span>}
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={student.name}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
            <input
              type="text"
              name="enrollmentNo"
              placeholder="Enrollment No"
              value={student.enrollmentNo}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={student.department}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={student.batch}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={student.email}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={student.mobile}
              onChange={(e) => handleStudentChange(index, e)}
              required
            />
          </div>
        ))}

        {students.length < 6 && (
          <button type="button" onClick={addStudent} className="btn">
            ➕ Add Member
          </button>
        )}

        <button type="submit" className="btn submit-btn">
          🚀 Register Team
        </button>
      </form>
    </div>
  );
}

export default TeamRegister;
