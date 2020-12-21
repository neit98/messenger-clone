import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { APP_PATH } from "../../constants";
import { clearUser } from "../../features/user/userSlice";
import "./Logout.scss";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(clearUser());
    window.sessionStorage.removeItem("token");
    history.push(APP_PATH.LOGIN);
  };

  return (
    <>
      <Button
        className="logout_button"
        leftIcon={<BiLogOut />}
        onClick={handleLogin}
      >
        Logout
      </Button>
    </>
  );
}

export default Logout;
