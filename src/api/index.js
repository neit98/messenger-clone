import db, { auth, provider } from "../firebase/index";

export function loginFirebase() {
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log("token: " + token);
      var user = result.user;
      console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    });
}
