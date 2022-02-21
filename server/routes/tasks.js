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
    WHERE users.email = $1
    ORDER BY tasks.complete_by ASC;`;

    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  // get the latest tasks for a user
  router.get("/new", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT tasks.* FROM tasks
    JOIN users ON tasks.user_id = users.id
    WHERE users.email = $1 AND tasks.is_completed = false
    ORDER BY tasks.complete_by ASC
    LIMIT 5;`;

    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });

  //update the is_completed column when a person finishes a task
  router.put("/complete", authenticateToken, function (req, res, next) {
    const taskId = req.body.data;
    console.log("TASK ID", taskId);
    const queryString = `
    UPDATE tasks
    SET is_completed = true
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

  // add a task to a goal for a user
  router.post("/", authenticateToken, function (req, res, next) {
    const userId = req.user.id;
    const details = req.body.taskData.details;
    const goalId = req.body.taskData.goal_id;
    const completeBy = req.body.taskData.date;

    const queryString = `
    INSERT INTO tasks (details, complete_by, goal_id, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;`;

    const queryParams = [details, completeBy, goalId, userId];
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
