const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

/* authenticate the user */
const loginRouter = (db) => {
  router.post("/", function (req, res, next) {
    const userEmail = req.body.email;

    // will check to see the type of login coming in and set the query accordingly
    const queryString = `
    SELECT * FROM users
    WHERE email = $1;`;

    const queryParams = [userEmail];
    return db
      .query(queryString, queryParams)
      .then((data) => {
        console.log(data.rows);
        if (req.body.password === data.rows[0].password) {
          const user = {
            id: data.rows[0].id,
            email: data.rows[0].email,
          };
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
          res.json({ accessToken: accessToken });
        } else {
          res.send("invalid");
        }
      })
      .catch((err) => res.send("no email exists"));
  });

  return router;
};
module.exports = loginRouter;
