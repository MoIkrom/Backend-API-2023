/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const Router = express.Router();

// eslint-disable-next-line prettier/prettier
const { getAllProduct, getProductbyId, createProduct } = require("../controllers/c_product");

Router.get("/", getAllProduct);
Router.get("/:id", getProductbyId);
Router.post("/", createProduct);

module.exports = Router;
