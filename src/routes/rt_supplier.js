/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const Router = express.Router();
const { getAllSupplier, AllSupplier, getSupplierbyId, createSupplier, updateSupplier, deleteSupplier } = require("../controllers/c_supplier");
const { authentication } = require("../middleware/isLogin");

Router.get("/", getAllSupplier);
Router.get("/all-supplier", AllSupplier);
Router.get("/:id", getSupplierbyId);
Router.post("/", authentication, createSupplier);
Router.patch("/:id", authentication, updateSupplier);
Router.delete("/:id", authentication, deleteSupplier);

module.exports = Router;
