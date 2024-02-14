import { IconButton } from "@chakra-ui/react";
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Link to="/profile">
      <IconButton
        aria-label="Profile"
        icon={<PiUserCircleFill />}
        variant="ghost"
        colorScheme="teal"
        fontSize="2xl"
      />
    </Link>
  );
};

export default ProfileIcon;
