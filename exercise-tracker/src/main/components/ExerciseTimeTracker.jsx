import "./ExerciseTimeTracker.css";

function ExerciseTimeTracker({ selectedExercise, exerciseTimes }) {
    return (
        <div className="exercise-time-tracker">
            <h3>
                Total time spent on {selectedExercise.name}:{" "}
                {exerciseTimes[selectedExercise.name] || 0} minutes
            </h3>
        </div>
    )
}

export default ExerciseTimeTracker;