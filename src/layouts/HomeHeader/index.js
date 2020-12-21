import React from "react";
import { useSelector } from "react-redux";
import Logout from "../../components/Logout/Logout";
import Notification from "../../components/Notification/Notification";
import Profile from "../../components/Profile/Profile";
import "./styles.scss";

function HomeHeader() {
  const username = useSelector((state) => state.info.displayName);
  return (
    <div className="home_header">
      <a href="#default" className="home_logo">
        {username}
      </a>
      <div className="home_header_right">
        <Notification />
        <Profile />
        <Logout />
      </div>
    </div>
  );
}

export default HomeHeader;
