// create html routes
const db = require("../models");
const path = require("path");

module.exports = (app) => {
  //html route for exercise.html
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
  });

  //html route for index.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  //html route for stats.html
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
  });
};
