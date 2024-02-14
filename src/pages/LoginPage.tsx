import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "demo" && password === "demo") {
      // Simulate successful login by storing user data in localStorage
      localStorage.setItem("user", JSON.stringify({ username }));
      // Redirect to profile page
      navigate("/profile");
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Box
        p={8}
        maxWidth="100%"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        my={8}
      >
        <Heading mb={4} textAlign={"center"}>
          Login
        </Heading>
        <form onSubmit={handleLogin}>
          <FormControl id="username" mb={4}>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mb={4} width="100%">
            Login
          </Button>
        </form>
        <Text>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
