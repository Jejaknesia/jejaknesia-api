const connection = require("../../utils/db");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JEJAKNESIA_JWT_SECRET_KEY;

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: "3d" });
}

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
            const reqPayload = {
              email: results[0].email,
              password: results[0].password,
            };
            const token = generateToken(reqPayload);
            console.log(token);
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
