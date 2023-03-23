/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { Register, getUserbyId, getAllUser, EditUser, deleteUser } = require("../controllers/c_user");

const Router = express.Router();

Router.get("/", getAllUser);
Router.get("/:id", getUserbyId);
Router.post("/", Register);
Router.patch("/:id", EditUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
