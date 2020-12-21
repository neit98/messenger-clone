import { Button } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import "./Profile.scss";

function Profile() {
  const handleOpen = () => {};
  return (
    <>
      <Button
        className="profile_button"
        leftIcon={<CgProfile />}
        onClick={handleOpen}
      >
        Profile
      </Button>
    </>
  );
}

export default Profile;
