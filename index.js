"use strict";

// APP dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Global vars
const PORT = process.env.PORT;

// Make my server
const app = express();
app.use(cors());

const { start } = require("./lib/server.js");

start(process.env.PORT);
