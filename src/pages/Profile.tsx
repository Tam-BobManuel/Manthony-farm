import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  Flex,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import profileJson from "../data/profileData.json";

interface User {
  username: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      // If not logged in, redirect to the login page
      navigate("/login");
    } else {
      // If logged in, set the user state
      setUser(JSON.parse(loggedInUser));
    }

    // Set profile image path from the imported JSON file
    setProfileImage(profileJson.profileImage);
  }, [navigate]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    // Redirect to the login page
    navigate("/login");
  };

  if (!user) {
    // If user is not logged in or signed up, redirect to signup page
    navigate("/signup");
    return null; // Return null to prevent rendering anything until redirection is complete
  }

  return (
    <Flex direction="column" align="center" width="100%">
      <Box p={8} maxW="100%" width="100%" height={"70vh"} padding={"2%"}>
        <Heading mb={4} textAlign="center">
          Profile Page
        </Heading>
        <Image
          src={profileImage}
          borderRadius="full"
          boxSize="150px"
          alt="User Image"
          margin="0 auto"
          objectFit="cover"
        />
        <Text textAlign="center">Welcome, {user.username}!</Text>
        <Text textAlign="center">Email: {user.email}</Text>
        <Center>
          <Button
            mt={4}
            colorScheme="teal"
            onClick={handleLogout}
            width="30%"
            margin="2% auto"
          >
            Logout
          </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default Profile;
