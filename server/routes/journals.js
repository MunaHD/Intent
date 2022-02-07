const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const journalsRouter = (db) => {
  // get all the journals for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT journals.* FROM journals
    JOIN goals ON journals.goal_id = goals.id
    JOIN users ON journals.user_id = users.id
    WHERE users.email = $1 AND goals.id = $2
    RETURNING*;`;

    const queryParams = [req.user.email];
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
