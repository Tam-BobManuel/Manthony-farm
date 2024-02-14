import React from "react";
import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

interface AboutUsProps {
  heading: string;
  text: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
  button?: {
    text: string;
    link: string;
  };
}

const AboutUs: React.FC<AboutUsProps> = ({
  heading,
  text,
  imageUrl,
  imagePosition = "left",
  button,
}) => {
  useColorMode();
  return (
    <Flex
      direction={{
        base: "column",
        md: imagePosition === "left" ? "row" : "row-reverse",
      }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      margin="0"
      padding={{ base: "4%", md: "2%" }}
      backgroundColor="rgba(0, 0, 0, 0.6)"
    >
      <Box flex="1" p={4} margin={{ base: 2, md: 0 }}>
        <Image src={imageUrl} alt={`${heading} image`} borderRadius={10} />
      </Box>
      <Box flex="1" p={{ base: 0, md: 1 }}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          {heading}
        </Text>
        <Text mt={2} textAlign="justify" color="white">
          {text}
        </Text>
        {button && (
          <Button
            as={RouterLink}
            to={button.link}
            colorScheme="gray"
            border={"1px solid black"}
            mt={4}
          >
            {button.text}
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default AboutUs;
