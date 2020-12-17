import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import messengerImg from "../../assets/images/messenger.jpg";
import "./Login.scss";

function Login() {
  const handleLogin = () => {
    alert("Login");
  };
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
