import { IconButton } from "@chakra-ui/react";
import React from "react";
import { SiMessenger } from "react-icons/si";
import { IoIosCreate } from "react-icons/io";
import "./styles.scss";

function HomeLayout() {
  const handleClickMessenger = () => {
    alert("Messenger");
  };

  const handleClickTodo = () => {
    alert("Todo");
  };

  return (
    <div className="home_layout">
      <div className="home_body">
        <IconButton
          className="messenger_button"
          aria-label="Messenger"
          icon={
            <SiMessenger style={{ height: 100, width: 100, color: "blue" }} />
          }
          onClick={handleClickMessenger}
        />
        <IconButton
          className="todo_button"
          aria-label="Todo"
          icon={
            <IoIosCreate style={{ height: 100, width: 100, color: "violet" }} />
          }
          onClick={handleClickTodo}
        />
      </div>
    </div>
  );
}

export default HomeLayout;
