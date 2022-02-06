require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// this will be how we connect the server to our DB
// and then we pass the db variable to our route functions
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");

app.use("/", homeRouter);
app.use("/login", loginRouter(db));

module.exports = app;
exports.db = db;
