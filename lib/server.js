"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const obj = { test: "pass", v: 2 };
  // res.status(200).json(obj);
  res.status(200).send("pipeline changes are working!");
});

module.exports = {
  app,
  start: port => app.listen(port, console.log(`Up on Port ${port}`))
};
