import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { keyframes } from "@emotion/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  // Define a rotation animation
  const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <HStack>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        aria-label={
          colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        onClick={toggleColorMode}
        colorScheme="teal"
        variant="ghost"
        // Apply the animation, transition, and circular shape to the button
        css={{
          animation: `${rotateAnimation} 7s linear infinite`, // Slow down the rotation
          borderRadius: "50%", // Make it a circle
          overflow: "hidden",
          transition: "transform 0.3s ease-in-out", // Add a transition effect
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      {/* <Text as="b" whiteSpace="nowrap">
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Text> */}
    </HStack>
  );
}

export default ColorModeSwitch;
