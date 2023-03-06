/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

//  Import Express
const express = require("express");

// Declare Variable & Call Express
const Router = express.Router();

// Declare Variable & Call Router
const userRoutes = require("./user");

// Declare Variable
const prefix = "/api/v1";

// Use router file as af callback
Router.use(`${prefix}/user`, userRoutes);

module.exports = Router;
