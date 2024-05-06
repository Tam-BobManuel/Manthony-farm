import { FaShoppingBasket } from "react-icons/fa";
import { IconButton, Box, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { cartItems } from "../hooks/cartData";
import { useState, useEffect } from "react";

function CartIcon() {
  const [itemValue, setItemValue] = useState(cartItems.length);

  useEffect(() => {
    setItemValue(cartItems.length);
  }, [cartItems]);

  return (
    <Box>
      <HStack>
        <Link to="/checkout">
          <IconButton
            aria-label="Shopping Cart"
            icon={<FaShoppingBasket />}
            variant="ghost"
            colorScheme="teal"
            margin="0%"
          />
        </Link>

        {itemValue > 0 && <Text margin="0%">{itemValue}</Text>}
      </HStack>
    </Box>
  );
}

export default CartIcon;