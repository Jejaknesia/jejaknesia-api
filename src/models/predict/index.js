<<<<<<< HEAD
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
=======
const Wreck = require("@hapi/wreck");
const connection = require("../../../utils/db");

const predictHandler = async (request, h) => {
  try {
    const { res, payload } = await Wreck.post(
      "https://jejaknesia-api-models-kwhslxrasa-et.a.run.app/predict_place",
      {
        payload: JSON.stringify({
          data: request.payload.data,
        }),
      }
    );

    const responseData = JSON.parse(payload.toString());

    const objectData = await Promise.all(
      responseData.result.map((data) => {
        const quota = data.toString();
        return new Promise((resolve, reject) => {
          connection.query(
            `SELECT * FROM places WHERE place_name LIKE '%${quota}%'`,
            (error, results, fields) => {
              if (error) {
                console.error(error);
                reject(error);
              } else {
                resolve(results);
              }
            }
          );
        });
      })
    );

    // Return the results as the response
    return h.response({
      status: responseData.status,
      error: responseData.error,
      data: [].concat.apply([], objectData),
    });
  } catch (error) {
    console.error(error);
    return h.response("Terjadi kesalahan").code(500);
  }
};

exports.predictHandler = predictHandler;
>>>>>>> 97cf192d2974259264bf870ebd029144a3c6adb3
