const jwt = require("jsonwebtoken");
const connection = require("../../utils/db");

const secretKey = process.env.JEJAKNESIA_JWT_SECRET_KEY;

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
        error: true,
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
            const response = {
              error: true,
              message: "Invalid email or password",
            };
            resolve(response);
          } else {
            const user = results[0]; // Assuming the first row contains the user data

            // Generate token
            const token = jwt.sign(
              { userId: user.id, name: user.name },
              secretKey,
              { expiresIn: "1h" } // Set token expiration time as desired
            );

            const response = {
              error: false,
              message: "Success",
              loginResult: {
                userId: user.id,
                name: user.name,
                token: token, // Include the generated token in the response
              },
            };
            resolve(response);
          }
        }
      );
    });

    if (results.error) {
      // User failed to login
      return h.response(results).code(401);
    } else {
      // User successfully logged in
      return h.response(results).code(200);
    }
  } catch (error) {
    return h
      .response({
        error: true,
        message: "Internal Server Error",
      })
      .code(500);
  }
};

exports.loginHandler = loginHandler;
