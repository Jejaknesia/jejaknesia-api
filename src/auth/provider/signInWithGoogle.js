const admin = require("firebase-admin");

// Initialize the Firebase admin SDK
<<<<<<< HEAD
const serviceAccount = require("../../../utils/jejaknesiaSericeAccount.json");
=======
const serviceAccount = require("../../../utils/jejaknesia-project-firebase.json");
>>>>>>> 97cf192d2974259264bf870ebd029144a3c6adb3
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const signInWithGoogle = async (request, h) => {
<<<<<<< HEAD
  const email = "user@example.com";
  const actionCodeSettings = {
    url: "http://example.com/completeSignIn",
=======
  const email = "argaaditya477@gmail.com";
  const actionCodeSettings = {
    url: "http://0.0.0.0:8080/api",
>>>>>>> 97cf192d2974259264bf870ebd029144a3c6adb3
    handleCodeInApp: true,
  };

  try {
    const signInLink = await admin
      .auth()
      .generateSignInWithEmailLink(email, actionCodeSettings);
<<<<<<< HEAD

=======
>>>>>>> 97cf192d2974259264bf870ebd029144a3c6adb3
    return h.redirect(signInLink);
  } catch (error) {
    console.error("Error generating sign-in link:", error);
    return h.response({ message: "Error generating sign-in link" }).code(500);
  }
};

exports.signInWithGoogle = signInWithGoogle;
