/* eslint-disable prettier/prettier */
const { getUserByEmail } = require("../models/r_user");
const wrapper = require("../utils/wrapper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supabase = require("../config/supabase");
const { logout } = require("../models/r_auth");

module.exports = {
  login: async (request, response) => {
    try {
      const { email, password } = request.body;

      //   PROSES VALIDASI EMAIL
      const validateEmail = () => email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/);

      if (!validateEmail(email)) {
        return wrapper.response(response, 400, "Email is not valid", null);
      }

      // PROSES PENGECEKAN EMAIL
      const checkEmail = await getUserByEmail(email);
      if (checkEmail.data.length < 1) {
        return wrapper.response(response, 404, "Email is Not Registed", null);
      }

      //  PROSES PENCOCOKAN PASSWORD
      const isSame = await bcrypt.compare(password, checkEmail.data[0].password).then((result) => result);
      if (!isSame) {
        return wrapper.response(response, 400, "Wrong Password", null);
      }

      const payload = {
        user_id: checkEmail.data[0].id,
        username: checkEmail.data[0].username,
        email: checkEmail.data[0].email,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1d",
        issuer: process.env.ISSUER,
      });

      const result = {
        token,
        payload,
      };

      new Promise((resolve, reject) => {
        supabase
          .from("token")
          .insert([{ token_login: token }])
          .then((result) => {
            if (!result.error) {
              resolve(result);
            } else {
              reject(result);
            }
          });

        return wrapper.response(response, 200, "Login Success", result);
      });
    } catch (error) {
      console.log(error);
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },

  logout: async (request, response) => {
    try {
      const token = request.header("x-access-token");
      console.log(token);
      await logout(token);

      return wrapper.response(response, 200, "Logout Success!");
    } catch (error) {
      console.log(error);
      const { status = 500, statusText = "Internal Server Error", error: errorData = null } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
};
