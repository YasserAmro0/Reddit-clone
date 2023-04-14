require("dotenv").config();
const path = require("path");
const express = require('express');
const cookieParser = require("cookie-parser");


const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;