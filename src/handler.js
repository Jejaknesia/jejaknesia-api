const connection = require("../utils/db");

const getAllRecordsHandler = async (request, h) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM tourism", (error, results, fields) => {
      if (error) {
        console.error(error);
        reject(error);
      }

      const response = h
        .response({
          status: "success",
          data: results,
        })
        .code(200);
      resolve(response);
    });
  });
};

const registerHandler = async (request, h) => {
  const { email, password } = request.payload;
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`,
      (error, results, fields) => {
        if (error) {
          console.error(error);
          reject(error);
        }

        const response = h
          .response({
            status: "success",
            data: results,
          })
          .code(200);
        resolve(response);
      }
    );
  });
};
const loginHandler = async (request, h) => {
  const { email, password } = request.payload;

  // Mencetak input dari user yang sedang login
  console.log("email:", email);
  console.log("Password:", password);

  return new Promise((resolve, reject) => {
    const authUsers = connection.query(
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
};

const authUsers = (email, password) => {
  !email || !password ? false : true;
};

module.exports = { getAllRecordsHandler, registerHandler, loginHandler };
