const admin = require("firebase-admin");

const signInCallback = async (request, h) => {
  const { token } = request.query; // Ambil token ID dari URL query parameter

  try {
    // Verifikasi token ID menggunakan Firebase Authentication
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userID = decodedToken.uid;

    return h
      .response({
        message: "Authentication successful",
        data: {
          userID,
        },
      })
      .code(200);
  } catch (error) {
    console.error(error);
    return h
      .response({
        message: "Authentication failed",
      })
      .code(400);
  }
};

exports.signInCallback = signInCallback;
