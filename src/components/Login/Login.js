import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC74PzYKRkfDeY4q1RVfq_wmDIhH78NIUZLw&usqp=CAU"
          alt=""
        />
        <div className="login_text">
          <h1>Chat App</h1>
        </div>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
