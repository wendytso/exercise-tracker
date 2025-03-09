import "./LeaderboardPage.css";
import { useState } from "react";
import React from "react";

// temporary placeholder names and scores used for the placement feature
const Leaderbaord = () => {
    const Atheletes = [
        {rank: 1, name: "Michael", time: 170}
        ,{rank: 2, name: "Stephanie", time: 155}  
        ,{rank: 3, name: "Kenzie", time: 143}
        ,{rank: 4, name: "Colby", time: 137}
        ,{rank: 5, name: "Sofia", time: 122}

    ];
}  
// Using the data shown we are going to make an array in the form of a table

function LeaderboardPage() {
// fireship videos html, css, react 
// learn how to import a chakra component 
// the Leaderbaord that displays once the tab is opened.
// shows a tseudo top five of those with the most physical activity
  return (<div>
        <h1>LeaderBoard</h1>
        <table>classname= "leaderboard table"</table>
        <p>Top Five Of The Week </p>
    </div>
  );
}
// sets an array of the data of the most active people
// and orders them from Greatest to Least time active
export default LeaderboardPage;
