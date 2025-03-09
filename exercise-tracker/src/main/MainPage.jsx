import "./MainPage.css";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import AIGenerator from "./components/AIGenerator";
import Carousel from "./components/Carousel";

import swimImage from "../assets/swimming-boys.png";
import runImage from "../assets/running-girl.png";
import skiImage from "../assets/skiing-girl.png";
import snowboardingImage from "../assets/snowboarding-girl.png";
import tennisImage from "../assets/tennis-boy.png";

function MainPage() {
  const exercises = [ // add more exercises here later
    { name: "Swimming", image: swimImage },
    { name: "Running", image: runImage }, 
    { name: "Skiing", image: skiImage },
    { name: "Snowboarding", image: snowboardingImage },
    { name: "Tennis", image: tennisImage },
  ];

  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  const buttonLabels = ["15 min", "30 min", "45 min", "60 min"];

  return (
    <div className="main-container">
        <AIGenerator />
=======
      <Header />

      <div className="title">
        <h1>Choose your exercise:</h1>

        <Carousel
          exercises={exercises}
          onExerciseSelect={setSelectedExercise}
        />

        {selectedExercise && (
          <div className="selected-exercise">
            Selected exercise: {selectedExercise.name}
          </div>
        )}

        <div className="time-buttons">
          {buttonLabels.map((label) => (
            <Button key={label} text={label} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainPage;
