/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const Router = express.Router();

Router.get("/user", (request, response) => {
  response.status(200).send("es oang oyy");
});
Router.post("/user", (request, response) => {
  response.status(200).send("es oang oyy");
});

module.exports = Router;
