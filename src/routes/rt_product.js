/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const Router = express.Router();

// eslint-disable-next-line prettier/prettier
const { getAllProduct, getProductbyId, createProduct, updateProduct, deleteProduct } = require("../controllers/c_product");

Router.get("/", getAllProduct);
Router.get("/:id", getProductbyId);
Router.post("/", createProduct);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
