// const tf = require("@tensorflow/tfjs-node");
// const modelPath = "./src/models/tfrs.h5";

// const predictHandler = async (request, h) => {
//   const input = "test"; // Masukkan data input untuk prediksi

//   // Memuat model dari file .h5
//   const model = await tf.loadLayersModel(`file://${modelPath}`);

//   // Melakukan prediksi menggunakan model
//   const prediction = model.predict(input);

//   // Mengambil hasil prediksi
//   const result = prediction.arraySync();

//   // Menyusun dan mengembalikan respons API
//   return { result };
// };

// // Menggunakan handler dalam route API Hapi
// server.route({
//   method: "POST",
//   path: "api/predict",
//   handler: predictHandler,
// });
