import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const ShopLink: React.FC = () => {
  return (
    <Link to="/shop" style={{ textDecoration: "none" }}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="lg" fontWeight="bold">
          Shop
        </Text>
      </Box>
    </Link>
  );
};

export default ShopLink;
