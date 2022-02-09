const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const journalsRouter = (db) => {
  // get all the journals for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT journals.*, goals.* FROM journals
    JOIN goals ON journals.goal_id = goals.id
    JOIN users ON journals.user_id = users.id
    WHERE users.email = $1;`;

    //AND goals.id = $2 <------ for specific goa;
    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  // add a new journal for a goal
  router.post("/", authenticateToken, function (req, res, next) {
    const userId = req.user.id;
    const journalData = req.body.journalData;
    console.log("JOURNAL DATA------>", journalData);
    const queryString = `
    INSERT INTO journals (entry, choice, goal_id, user_id)
    VALUES ($1, $2, $3, $4)
    ;`;

    //AND goals.id = $2 <------ for specific goa;
    const queryParams = [
      journalData.entry,
      journalData.choice,
      journalData.goalId,
      userId,
    ];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });

  return router;
};
module.exports = journalsRouter;
