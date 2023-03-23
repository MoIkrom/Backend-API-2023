/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const Router = express.Router();
const { getAllProduct, getProductbyId, createProduct, updateProduct, deleteProduct } = require("../controllers/c_product");
const { authentication } = require("../middleware/isLogin");

Router.get("/", getAllProduct);
Router.get("/:id", getProductbyId);
Router.post("/", authentication, createProduct);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
