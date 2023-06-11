const admin = require("firebase-admin");

// Initialize the Firebase admin SDK
const serviceAccount = require("../../../utils/jejaknesia-project-firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const signInWithGoogle = async (request, h) => {
  const email = "argaaditya477@gmail.com";
  const actionCodeSettings = {
    url: "http://0.0.0.0:8080/api",
    handleCodeInApp: true,
  };

  try {
    const signInLink = await admin
      .auth()
      .generateSignInWithEmailLink(email, actionCodeSettings);
    return h.redirect(signInLink);
  } catch (error) {
    console.error("Error generating sign-in link:", error);
    return h.response({ message: "Error generating sign-in link" }).code(500);
  }
};

exports.signInWithGoogle = signInWithGoogle;
