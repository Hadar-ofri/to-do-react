import React from "react";

function Intro() {
  return (
    <div className="intro-container">
      <h3 className="intro-title">Welcome to My Task Manager!</h3>
      <p className="intro-description">
        This app helps you organize and track your tasks effortlessly.
      </p>
      <p className="intro-subtitle">
        <strong>Here’s how it works:</strong>
      </p>
      <ul className="intro-list">
        <li>
          <span className="intro-icon">➕</span> Add Tasks: Click Add Task and
          fill in the details.
        </li>
        <li>
          <span className="intro-icon">🔄</span> Reorder & Move Tasks: Press on move forward/back buttons to change task status.
        </li>
        <li>
          <span className="intro-icon">✏️</span> Edit and Delete: Click Edit to
          change details, or Delete to remove a task.
        </li>
        <li>
          <span className="intro-icon">💾</span> Auto-Save: Tasks are saved in
          Local Storage with their status and order, keeping your setup
          consistent across sessions.
        </li>
      </ul>
    </div>
  );
}

export default Intro;