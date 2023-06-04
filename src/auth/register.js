const connection = require("../../utils/db");

const isValidEmail = (email) => {
  // Regex untuk memvalidasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// REGISTER
const registerHandler = async (request, h) => {
  const { email, password } = request.payload;

  if (!email || !password) {
    return h
      .response({
        status: "error",
        message: "Email and password are required fields",
      })
      .code(400);
  }

  if (!isValidEmail(email)) {
    return h
      .response({
        status: "error",
        message: "Invalid email format",
      })
      .code(400);
  }

  try {
    await new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`,
        (error, results, fields) => {
          if (error) {
            if (error.code === "ER_DUP_ENTRY") {
              const errorMessage = "Email already registered";
              reject(new Error(errorMessage));
            } else {
              reject(error);
            }
          } else {
            resolve(results);
          }
        }
      );
    });

    return h
      .response({
        status: "success",
        message: "User registered successfully",
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "error",
        message: error.message || "Internal Server Error",
      })
      .code(error.status || 500);
  }
};

exports.registerHandler = registerHandler;
