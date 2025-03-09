import "./MainPage.css";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import swimImage from "../assets/swimming.svg";
import AIGenerator from "./components/AIGenerator";

function MainPage() {

    const exercises = [
        { name: "Swimming", image: swimImage},
        //{ name: "Running", image: runImage},
    ];

    const [selectedExcercise, setChoosenExercise] = useState(null);

    const buttonLabels = ["15 min", "30 min", "45 min", "60 min"];

  return (
    <div className="main-container">
        <AIGenerator />
        <Header />
        <div className="title">
            <h1>Choose your exercise: </h1>

            {/* Exercise Options */}
            <div className="exercise-options">
                {exercises.map((exercise, index) => (
                    <img
                        key={index}
                        src={exercise.image}
                        alt={exercise.name}
                        onClick={() => setChoosenExercise(exercise)}
                    />
                ))}
            </div>

            {/* Exercise Selection */}
            {selectedExcercise && (            
            <div className="exercise-name">
                <h2>{selectedExcercise.name}</h2>
                <img
                src={selectedExcercise.image}
                alt={selectedExcercise.name}
                className="selected-image"
                />
            </div>
            )}

        {/* Time Accumulation Buttons */}
        <div className="timebuttons">
            {buttonLabels.map((label, index) => (
                <Button key={index} text={label} />
            ))}
      <Footer />
        </div>
    </div>
    </div>
  );
}

export default MainPage;
