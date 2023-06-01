const { getAllRecordsHandler } = require("./places");
const { loginHandler } = require("./auth/login");
const { registerHandler } = require("./auth/register");

const routes = [
  {
    path: "/",
    method: "GET",
    handler: getAllRecordsHandler,
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
