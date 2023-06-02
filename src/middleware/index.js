const jwt = require("jsonwebtoken");

const secretKey = process.env.JEJAKNESIA_JWT_SECRET_KEY;

const authMiddleware = (request, h) => {
  const token = request.headers.authorization;

  console.log(!token);

  return h.response({
    status: "success",
    message: "Authentication successful",
  });
};

module.exports = authMiddleware;
