const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../Helper/authenticate");

const emotionsRouter = (db) => {
  // get all the journals for a user
  router.get("/", authenticateToken, function (req, res, next) {
    const queryString = `
    SELECT image FROM choices;`;

    //AND goals.id = $2 <------ for specific goa;
    return db
      .query(queryString)
      .then((data) => {
        res.json(data.rows);
        console.log("DATA ROWS", data.rows);
      })
      .catch((err) => console.log(err));
  });

  return router;
};
module.exports = emotionsRouter;
