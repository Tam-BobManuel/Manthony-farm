import { Box, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0, 0, 0, 0.7)"
      zIndex="9999"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default LoadingScreen;
