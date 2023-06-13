const Wreck = require("@hapi/wreck");
const connection = require("../../../utils/db");

const manyPredictHandler = async (request, h) => {
  try {
    const userInput = request.payload.text; // Assuming the user input is provided in the "text" field
    console.log(userInput);
    const { res, payload } = await Wreck.post(
      "https://jejaknesia-models-kwhslxrasa-et.a.run.app/predict_text2",
      {
        payload: JSON.stringify([userInput]), // Wrap the user input in an array
      }
    );

    const responseData = JSON.parse(payload.toString());

    const objectData = await Promise.all(
      responseData.map((data) => {
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
      data: objectData,
    });
  } catch (error) {
    console.error(error);
    return h.response("Terjadi kesalahan").code(500);
  }
};

exports.manyPredictHandler = manyPredictHandler;
