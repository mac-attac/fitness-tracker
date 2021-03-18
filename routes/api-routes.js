//create api routes here
const db = require("../models");

module.exports = (app) => {
  //retrieve all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        res.send(err);
      } else {
        res.json(workouts);
      }
    });
  });
  //create new workout
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body, (err, workouts) => {
      if (err) {
        res.send(err);
      } else {
        res.json(workouts);
      }
    });
  });

  //retrieve workouts in range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  //add an exercise to a workout
  app.put("/api/workouts/:workout", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.workout,
      { $push: { exercises: body } },
      { new: true, useFindAndModify: false }
    )
      .then((Workout) => {
        res.json(Workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
