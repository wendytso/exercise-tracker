import React from "react";
import "./ActivitySummary.css";

function ActivitySummary({ exerciseTimes }) {
  // Calculate total time across all exercises
  const totalTime = Object.values(exerciseTimes).reduce((acc, time) => acc + time, 0);

  return (
    <div className="activity-summary">
      <h2>Your Activity Summary</h2>
      <ul>
        {Object.entries(exerciseTimes).map(([exercise, time]) => (
          <li key={exercise}>
            <span className="exercise-name">{exercise}:</span> 
            <span className="exercise-time">{time} minutes</span>
          </li>
        ))}
      </ul>
      <h3 className="total-time">Total Activity Time: {totalTime} minutes</h3>
    </div>
  );
}

export default ActivitySummary;
