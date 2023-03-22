const supabase = require("../config/supabase");

module.exports = {
  getAllProduct: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("product")
        .select("*")
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
};
