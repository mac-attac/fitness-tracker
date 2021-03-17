const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {},
  exercise: {
    type: {
      type: String,
      trim: true,
      enum: ["Resistance", "Cardio"],
      required: [true, "Please enter in an exercise type."],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter in an exercise name."],
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
      min: [1, "You did more sets than zero!"],
    },
    reps: {
      type: Number,
      min: [1, "You did more reps than zero!"],
    },
    duration: {
      type: Number,
      required: "Enter duration in minutes",
      min: [1, "You know you ran for longer than that!"],
    },
    distance: {
      type: Number,
      min: [1, "You know you ran farther than that!"],
    },
  },
});

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
//export module
module.exports = Workout;
