// const tf = require("@tensorflow/tfjs-node");
// const h5 = require("h5");

// // Function to load the model
// async function loadModel() {
//   const modelPath = "./src/models/recommendation_rating_model.h5";

//   // Load the model architecture and weights
//   const model = await tf.loadLayersModel(`file://${modelPath}`, {
//     customObjects: {
//       // Define custom objects if needed
//     },
//     strict: false, // Set to false to allow loading model with different architecture
//   });

//   return model;
// }

// // Function to perform prediction using the loaded model
// async function predictRating(userId, tourismId) {
//   try {
//     // Load the model
//     const model = await loadModel();

//     // Preprocess the input data
//     const userIdTensor = tf.tensor2d([[userId]]);
//     const tourismIdTensor = tf.tensor2d([[tourismId]]);

//     // Perform prediction
//     const prediction = model.predict([userIdTensor, tourismIdTensor]);

//     // Get the prediction result
//     const rating = prediction.dataSync()[0];

//     return rating;
//   } catch (error) {
//     console.error(error);
//     return "Internal Server Error";
//   }
// }

// exports.predictRating = predictRating;
