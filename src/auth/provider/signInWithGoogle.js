const admin = require("firebase-admin");

// Initialize the Firebase admin SDK
const serviceAccount = require("../../../utils/jejaknesiaSericeAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const signInWithGoogle = async (request, h) => {
  const email = "user@example.com";
  const actionCodeSettings = {
    url: "http://example.com/completeSignIn",
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
