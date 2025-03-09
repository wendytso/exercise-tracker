import React from "react";
import "./LeaderboardStats.css";

function LeaderboardStats({ exerciseTimes }) {
  // Calculate our total time
  const totalTime = Object.values(exerciseTimes).reduce((acc, time) => acc + time, 0);

  // Static leaderboard users
  const staticUsers = [
    { name: "Michael", time: 170 },
    { name: "Stephanie", time: 155 },
    { name: "Kenzie", time: 143 },
    { name: "Colby", time: 137 },
    { name: "Sofia", time: 122 },
  ];

  // Insert our profile dynamically
  const allUsers = [...staticUsers, { name: "You", time: totalTime }];

  // Sort leaderboard (highest time first)
  allUsers.sort((a, b) => b.time - a.time);

  return (
    <div className="leaderboard">
      <h2>Leaderboard Rankings</h2>
      <ol>
        {allUsers.map((user, index) => (
          <li key={user.name} className={user.name === "You" ? "highlight" : ""}>
            <span className="rank">#{index + 1}</span>
            <span className="name">{user.name}</span>
            <span className="time">{user.time} minutes</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default LeaderboardStats;

