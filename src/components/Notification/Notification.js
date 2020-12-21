import { IconButton } from "@chakra-ui/react";
import React from "react";
import "./Notification.scss";
import { RiNotificationFill } from "react-icons/ri";

function Notification() {
  return (
    <>
      <IconButton
        className="noti_button"
        colorScheme="blue"
        aria-label="Search database"
        icon={<RiNotificationFill />}
      />
    </>
  );
}

export default Notification;
