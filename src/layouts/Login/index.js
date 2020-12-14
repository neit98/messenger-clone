import React from "react";
import Login from "../../components/Login/Login";
import "./styles.scss";

function LoginLayout() {
  return (
    <div className="login_layout">
      <div className="login_body">
        <Login />
      </div>
    </div>
  );
}

export default LoginLayout;
