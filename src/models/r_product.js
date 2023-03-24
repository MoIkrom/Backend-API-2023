const supabase = require("../config/supabase");

module.exports = {
  // getCountProduct: () => new Promise ((resolve , reject) => {})
  getCountProduct: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .select("*", { count: "exact" })
        .then((result) => {
          if (!result.error) {
            resolve(result.count);
          } else {
            reject(result);
          }
        });
    }),

  getAllProduct: (offset, limit) =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .select("*")
        .range(offset, offset + limit - 1)
        // .sort(sortColumn, { ascending: sortType })
        .order("created_at", { ascending: false })
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  getProductbyId: (id) =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .select("*")
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  createProduct: (data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .insert([data])
        .select()
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  updateProduct: (id, data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .update(data)
        .select()
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
  deleteProduct: (id) =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .delete()
        .select()
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),
};
