const { getAllRecordsHandler } = require("./places");
const { loginHandler } = require("./auth/login");
const { registerHandler } = require("./auth/register");

const authMiddleware = require("./middleware");

const routes = [
  {
    path: "/api",
    method: "GET",
    handler: getAllRecordsHandler,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    path: "/register",
    method: "POST",
    handler: registerHandler,
  },
  {
    path: "/login",
    method: "POST",
    handler: loginHandler,
  },
];

module.exports = routes;
