const connection = require("../../utils/db");

const isValidEmail = (email) => {
  // Regex untuk memvalidasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  if (!isValidEmail(email)) {
    return h
      .response({
        status: "error",
        message: "Invalid email format",
      })
      .code(400);
  }

  try {
    const results = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM users WHERE email='${email}' AND password='${password}'`,
        (error, results, fields) => {
          if (error) {
            console.error(error);
            reject(error);
          } else if (results.length === 0) {
            // Jika tidak ada hasil dari query, artinya kombinasi email dan password tidak ditemukan
            const response = h
              .response({
                status: "login failed",
                message: "Invalid email or password",
              })
              .code(401);
            resolve(response);
          } else {
            const response = h
              .response({
                status: "login success",
              })
              .code(200);
            resolve(response);
          }
        }
      );
    });
    return results;
  } catch (error) {
    return h
      .response({
        status: "error",
        message: "Internal Server Error",
      })
      .code(500);
  }
};

exports.loginHandler = loginHandler;
