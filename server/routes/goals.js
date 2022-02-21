const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const goalsRouter = (db) => {
  // add a goal
  router.post("/", authenticateToken, function (req, res, next) {
    const userId = req.user.id;
    const name = req.body.goalData.name;
    const category = req.body.goalData.category;
    // console.log("DATA ----POST---->", req.body.goalData);
    const queryString = `
    INSERT INTO goals (name, category, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;`;

    const queryParams = [name, category, userId];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  router.put("/", authenticateToken, function (req, res, next) {
    const goalStatus = req.body.data.status;
    const goalId = req.body.data.id;
    // console.log("DATA ----POST---->", req.body.goalData);
    const queryString = `
    UPDATE goals
    SET status = $1
    WHERE id = $2
    RETURNING *;`;

    const queryParams = [goalStatus, goalId];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  // get all the goals for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT goals.* FROM goals
    JOIN users ON goals.user_id = users.id
    WHERE users.email = $1
    ORDER BY goals.created DESC;`;

    const queryParams = [req.user.email];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });
  // get all the goals names for a user
  router.get("/names", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT goals.name, goals.id FROM goals
    JOIN users ON goals.user_id = users.id
    WHERE users.email = $1
    ORDER BY goals.id;`;

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
