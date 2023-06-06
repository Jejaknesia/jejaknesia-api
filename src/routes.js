const { getAllRecordsHandler } = require("./places");
// auth
const { loginHandler } = require("./auth/login");
const { registerHandler } = require("./auth/register");
const authMiddleware = require("./middleware");
//
const { getAllBlogs } = require("./blogs");
const { getBlogById } = require("./blogs/blogDetail");

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
    path: "/api/blogs",
    method: "GET",
    handler: getAllBlogs,
    options: {
      pre: [authMiddleware],
    },
  },
  {
    path: "/api/blogs/{id}",
    method: "GET",
    handler: getBlogById,
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
