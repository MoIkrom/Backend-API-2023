/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { login, logout } = require("../controllers/c_auth");

const Router = express.Router();

Router.post("/login", login);
Router.delete("/logout", logout);

module.exports = Router;
