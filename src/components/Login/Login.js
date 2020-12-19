import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import messengerImg from "../../assets/images/messenger.jpg";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase/index";
import { storeUser } from "../../features/user/userSlice";
import { useHistory } from "react-router-dom";
import { APP_PATH } from "../../constants";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [success, setSuccess] = useState(false);

  const loginFirebase = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        window.sessionStorage.setItem("token", token);
        var user = result?.user;
        const info = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        };
        dispatch(storeUser(info));
        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
  };

  const handleLogin = () => {
    loginFirebase();
  };

  useEffect(() => {
    const redirectToHomePage = () => {
      if (success) history.push(APP_PATH.HOME);
    };
    redirectToHomePage();
  }, [success, history]);

  return (
    <div className="login_container">
      <img src={messengerImg} alt="img" />
      <div className="login_text" />

      <Button
        className="login_button"
        leftIcon={<FaGoogle />}
        onClick={handleLogin}
      >
        Sign in with Gmail
      </Button>
    </div>
  );
}

export default Login;
