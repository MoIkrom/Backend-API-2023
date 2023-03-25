/* eslint-disable prettier/prettier */
const { getAllProduct, getProductbyId, createProduct, updateProduct, deleteProduct, getCountProduct } = require("../models/r_product");
const wrapper = require("../utils/wrapper");

module.exports = {
  getAllProduct: async (request, response) => {
    try {
      let { page, limit } = request.query;
      page = +page;
      limit = +limit;
      const totalData = await getCountProduct();
      const totalPage = Math.ceil(totalData / limit);
      const pagination = { page, totalPage, limit, totalData };
      const offset = page * limit - limit;

      // let sortColumn = "dateTimeShow";
      // let sortType = "asc";

      // if (sort) {
      //   sortColumn = sort.split(" ")[0];
      //   sortType = sort.split(" ")[1];
      // }

      // if (sortType.toLowerCase() === "asc") {
      //   sortType = true;
      // } else {
      //   sortType = false;
      // }
      const result = await getAllProduct(offset, limit);
      return wrapper.response(response, result.status, "Success Get Data !", result.data, pagination);
    } catch (error) {
      console.log(error);
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  getProductbyId: async (request, response) => {
    const { id } = request.params;
    try {
      const result = await getProductbyId(id);
      if (result.data.length < 1) {
        wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
      }

      return wrapper.response(response, result.status, "Success Get Product by Id !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  createProduct: async (request, response) => {
    try {
      const { nama_Barang, harga, stock, supplier_id } = request.body;
      const setData = { nama_Barang, harga, stock, supplier_id };
      const result = await createProduct(setData);

      return wrapper.response(response, result.status, "Success Create Product !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  updateProduct: async (request, response) => {
    try {
      const { nama_Barang, harga, stock } = request.body;
      const { id } = request.params;
      const setData = {
        nama_Barang,
        harga,
        stock,
      };
      const result = await updateProduct(id, setData);
      if (result.data.length < 1) {
        wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
      }
      return wrapper.response(response, result.status, "Success Update Data !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteProduct(id);
      if (result.data.length < 1) {
        wrapper.response(response, 404, `Data with ID '${id}' Not Found !`, null);
      }
      return wrapper.response(response, result.status, "Success Delete Data !", result.data);
    } catch (error) {
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
};
