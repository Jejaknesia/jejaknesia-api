const { getAllRecordsHandler } = require("./places");
// auth
const { loginHandler } = require("./auth/login");
const { registerHandler } = require("./auth/register");
const authMiddleware = require("./middleware");

// provider
const { signInWithGoogle } = require("./auth/provider/signInWithGoogle");
const { signInCallback } = require("./auth/provider/callback");
//blogs
const { getAllBlogs } = require("./blogs");
const { getBlogById } = require("./blogs/blogDetail");
// model
const { predictHandler } = require("./models/predict");
const { manyPredictHandler } = require("./models/predict/manyPredict");

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
  {
    path: "/auth/google",
    method: "GET",
    handler: signInWithGoogle,
  },
  {
<<<<<<< HEAD
    method: "GET",
    path: "/auth/google/callback",
    handler: signInCallback,
  },
=======
    path: "/auth/google/callback",
    method: "GET",
    handler: signInCallback,
  },
  {
    path: "/api/predict",
    method: "POST",
    handler: predictHandler,
  },
  {
    path: "/api/predict2",
    method: "POST",
    handler: manyPredictHandler,
  },
>>>>>>> 97cf192d2974259264bf870ebd029144a3c6adb3
];

module.exports = routes;
