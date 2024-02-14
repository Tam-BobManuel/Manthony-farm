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

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Store user data in localStorage and redirect
    localStorage.setItem("user", JSON.stringify({ username, email }));
    navigate("/profile");
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Box
        p={8}
        maxWidth="100%"
        borderRadius={8}
        boxShadow="lg"
        my={8}
        border={"1px solid lightgray"}
      >
        <Heading mb={4} textAlign={"center"}>
          Sign Up
        </Heading>
        <form onSubmit={handleSignup}>
          <FormControl id="username" mb={4}>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              border={"1px solid lightgray"}
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border={"1px solid lightgray"}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border={"1px solid lightgray"}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mb={4} width="100%">
            Sign Up
          </Button>
        </form>
        <Text>
          Already have an account? <Link to="/login">Login</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupPage;
