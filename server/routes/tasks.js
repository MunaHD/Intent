const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const tasksRouter = (db) => {
  // get all the tasks for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT tasks.* FROM tasks
    JOIN users ON tasks.user_id = users.id
    JOIN goals ON tasks.goal_id = goals.id
    WHERE users.email = $1 AND tasks.iscompleted = false
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

  router.put("/complete", authenticateToken, function (req, res, next) {
    const taskId = req.body.data;
    console.log("TASK ID", taskId);
    const queryString = `
    UPDATE tasks
    SET iscompleted = true
    WHERE id = $1
    RETURNING *;`;

    const queryParams = [taskId];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("Tasks DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  // add a task

  router.post("/", authenticateToken, function (req, res, next) {
    const userId = req.user.id;
    const details = req.body.taskData.details;
    const goalId = req.body.taskData.goal_id;

    // console.log("DATA ----POST---->", req.body.goalData);
    const queryString = `
    INSERT INTO tasks (details, goal_id, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;`;

    const queryParams = [details, goalId, userId];
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
module.exports = tasksRouter;
