/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const { getAllProduct, getProductbyId, createProduct } = require("../models/r_product");
const wrapper = require("../utils/wrapper");

module.exports = {
  getAllProduct: async (request, response) => {
    try {
      const result = await getAllProduct();

      wrapper.response(response, result.status, "Success Get Data !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  getProductbyId: async (request, response) => {
    const { id } = request.params;
    try {
      const result = await getProductbyId(id);
      if (result.data.length < 1) {
        wrapper.response(response, 404, `Data ${id} Not Found !`, null);
      }

      wrapper.response(response, result.status, "Success Get Product by Id !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  createProduct: async (request, response) => {
    try {
      const { nama_Barang, harga, stock } = request.body;
      const setData = { nama_Barang, harga, stock };
      const result = await createProduct(setData);

      wrapper.response(response, result.status, "Success Create Product !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
};
