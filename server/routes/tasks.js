const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const goalsRouter = (db) => {
  // get all the goals for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT tasks.* FROM tasks
    JOIN users ON tasks.user_id = users.id
    JOIN goals ON tasks.goal_id = goals.id
    WHERE users.email = $1
    ORDER BY tasks.id;`;

    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/delete/:id", authenticateToken, function (req, res, next) {
    // console.log("here in the delelete goals route");
    // console.log("-----------------------");
    // console.log("USER", req.user);
    // console.log("-----------------------");
    // console.log("DATA", req.params.id);

    const goalId = req.params.id;
    const queryString = `
    DELETE from goals
    WHERE id = $1;`;

    const queryParams = [goalId];
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
module.exports = goalsRouter;
