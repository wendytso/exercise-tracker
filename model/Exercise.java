// The "Exercise" class has getter and setter methods to prompt the user to:
// Set and get the exercise name, and set the exercise duration

public class Exercise {

    private String exerciseName;
    private int exerciseTime;
    
    // EFFECTS:  Constructs an individual exercise, with relevant information
    // pertaining to the exercise name and the amount of physical activity time
    public Exercise(String name, int time) {
        this.exerciseName = name;
        this.exerciseTime = time;
    }

    // getters
    public String getExerciseName() {
        return exerciseName;
    }

    public int getExerciseTime() {
        return exerciseTime;
    }

    // setters
    public void setExerciseName(String name) {
        this.exerciseName = name;
    }

    // Extra method if required
    public void setExerciseTime(int time) {
        this.exerciseTime = time;
    }

    // MODIFIES: this
    // EFFECTS: Adds a 15 minute period to the user's exercise record for their designated
    // exercise
    public void addFifteenMinutes() {
        this.exerciseTime += 15;
    }

    // MODIFIES: this
    // EFFECTS: Adds a 30 minute period to the user's exercise record for their designated
    // exercise
    public void addThirtyMinutes() {
        this.exerciseTime += 30;
    }

    // MODIFIES: this
    // EFFECTS: Adds a 45 minute period to the user's exercise record for their designated exercise
    public void addFortyFiveMinutes() {
        this.exerciseTime += 45;
    }

    // MODIFIES: this
    // EFFECTS: Adds a 1-hour period to the user's exercise record for their designated exercise
    public void addOneHour() {
        this.exerciseTime += 60;
    }

    // MODIFIES: this
    // Extra method if required
    public void addMiscellaneousTime(int time) {
        this.exerciseTime += time;
    }


}
