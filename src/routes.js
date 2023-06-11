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
// const { predictRating } = require("./models/predict");

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
    method: "GET",
    path: "/auth/google/callback",
    handler: signInCallback,
  },
  // {
  //   method: "POST",
  //   path: "/api/predict",
  //   handler: async (request, h) => {
  //     try {
  //       const { userId, tourismId } = request.payload;
  //       const rating = await predictRating(userId, tourismId);
  //       return rating;
  //     } catch (error) {
  //       console.error(error);
  //       return "Internal Server Error";
  //     }
  //   },
  // },
];

module.exports = routes;
