const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => Date.now(),
    },
    exercises: [
      {
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
        },
        reps: {
          type: Number,
        },
        duration: {
          type: Number,
          required: "Enter duration in minutes.",
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
//export module
module.exports = Workout;
