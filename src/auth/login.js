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
            const response = {
              error: false,
              message: "Success",
              loginResult: {
                userId: user.id, // Adjust the property name based on your database structure
                name: user.name, // Assuming the column name is 'name'
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

