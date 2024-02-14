import React from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

const ContactMe = () => {
  const { colorMode } = useColorMode();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted!");
    const form = e.currentTarget;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(() => {
        console.log("Form data sent successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Contact Me
      </Heading>
      <Box
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        p="4"
        rounded="md"
        mb="4"
      >
        <form
          action="https://formsubmit.co/788fc5218378eaf666e98ca7c36fcd93"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="Name"
            mb="2"
            name="name"
            required
            border="1px solid gray"
          />
          <Input
            type="email"
            placeholder="Email"
            mb="2"
            name="_replyto"
            required
            border="1px solid gray"
          />
          <Textarea
            placeholder="Message"
            mb="2"
            name="message"
            required
            border="1px solid gray"
          />
          <input type="hidden" name="_subject" value="New contact message" />
          <Button type="submit" colorScheme="teal">
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMe;
