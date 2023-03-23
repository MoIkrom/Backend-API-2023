/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const { Register, getUserbyId, getAllUser, EditUser, deleteUser, EditPassword } = require("../controllers/c_user");

const Router = express.Router();

Router.get("/", getAllUser);
Router.get("/:id", getUserbyId);
Router.post("/", Register);
Router.patch("/:id", EditUser);
// Router.patch("/edit-password/:id", EditPassword);
Router.delete("/:id", deleteUser);

module.exports = Router;
