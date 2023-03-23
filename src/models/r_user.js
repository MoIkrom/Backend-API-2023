const supabase = require("../config/supabase");

module.exports = {
  Register: (data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .insert([data])
        .select("id, email, username")
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  EditPassword: (id) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  getUserbyId: (id) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .select("id, username, email")
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  getUserByEmail: (email) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .select("*")
        .eq("email", email)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  getCountUser: () =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .select("*", { count: "exact" })
        .then((result) => {
          if (!result.error) {
            resolve(result.count);
          } else {
            reject(result);
          }
        });
    }),

  getAllUser: (offset, limit) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .select("id, email, username, created_at")
        .range(offset, offset + limit - 1)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  EditUser: (id, data) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
        .update(data)
        .select("username")
        .eq("id", id)
        .then((result) => {
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        });
    }),

  deleteUser: (id) =>
    new Promise((resolve, reject) => {
      supabase
        .from("user")
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

  //   const deleteWhitelistToken = (token) => {
  //     return new Promise((resolve, reject) => {
  //       const query = "delete from whitelist_token where token = $1";
  //       postgreDb.query(query, [token], (error, result) => {
  //         if (error) {
  //           console.log(query);
  //           console.log(error);
  //           return reject(error);
  //         }
  //         console.log(query);
  //         resolve(result);
  //       });
  //     });
  //   };

  //   const checkWhitelistToken = (token) => {
  //     return new Promise((resolve, reject) => {
  //       const query = "select * from whitelist_token where token = $1";
  //       postgreDb.query(query, [token], (error, result) => {
  //         if (error) {
  //           console.log(error);
  //           return reject(error);
  //         }
  //         resolve(result);
  //       });
  //     });
  //   };
};
