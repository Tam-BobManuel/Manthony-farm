import type React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Button, Image, Input, SimpleGrid } from "@chakra-ui/react";
import items from "../data/shopData.json";
import { cartItems, updateCartItems } from "../hooks/cartData";
import LoadingScreen from "../components/LoadingScreen";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Checkout: React.FC = () => {
  const [cartItemsDetails, setCartItemsDetails] = useState<Item[]>([]);
  const [itemCounts, setItemCounts] = useState<{ [key: number]: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve details of items in the cart
  useEffect(() => {
    const updatedCartItemsDetails = items.filter((item: Item) =>
      cartItems.includes(item.id)
    );
    setCartItemsDetails(updatedCartItemsDetails);

    // Count the occurrences of each item ID in the cart
    const updatedItemCounts: { [key: number]: number } = {};
    // biome-ignore lint/complexity/noForEach: <explanation>
    cartItems.forEach((itemId) => {
      updatedItemCounts[itemId] = (updatedItemCounts[itemId] || 0) + 1;
    });
    setItemCounts(updatedItemCounts);
    setIsLoading(false);
  }, [cartItems]);

  // Calculate total price of items in the cart
  const totalPrice = cartItemsDetails.reduce(
    (total, currentItem) =>
      total + currentItem.price * itemCounts[currentItem.id],
    0
  );

  // Function to update quantity of a specific item
  const updateQuantity = (itemId: number, newQuantity: number) => {
    // Ensure newQuantity is at least 0
    newQuantity = Math.max(newQuantity, 0);

    // Create a copy of itemCounts with the updated quantity for the item
    const updatedItemCounts = { ...itemCounts, [itemId]: newQuantity };

    // Remove the item from the cart if the quantity is 0
    if (newQuantity === 0) {
      const updatedCartItems = cartItems.filter((item) => item !== itemId);
      updateCartItems(updatedCartItems);
    }

    // Update itemCounts state with the updated counts
    setItemCounts(updatedItemCounts);
  };
  const addToCart = (itemId: number) => {
    const newCartItems = [...cartItems, itemId];
    updateCartItems(newCartItems);
  };
  const updateCartWithQuantity = (itemId: number, quantity: number) => {
    // Create a copy of the cart items array
    const updatedCartItems = [...cartItems];

    // Find the existing quantity of the item in the cart
    const existingQuantity = updatedCartItems.filter(
      (item) => item === itemId
    ).length;

    // Calculate the difference between the specified quantity and the existing quantity
    const difference = quantity - existingQuantity;

    // If the difference is positive, add the specified quantity of the item to the cart
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        updatedCartItems.push(itemId);
      }
    } else if (difference < 0) {
      // If the difference is negative, remove the absolute value of the difference from the cart
      let count = 0;
      for (let i = 0; i < updatedCartItems.length; i++) {
        if (updatedCartItems[i] === itemId) {
          count++;
          if (count <= Math.abs(difference)) {
            updatedCartItems.splice(i, 1); // Remove the item
            i--; // Decrement i to account for the removed item
          }
        }
      }
    }

    // Update the cart items state
    updateCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId: number) => {
    // Find the index of the item to be removed
    const index = cartItems.indexOf(itemId);

    // If the item is found, remove it from the array
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1); // Remove one occurrence of the item
      updateCartItems(updatedCartItems); // Update the cart items
    }
  };

  // Function to handle blur event
  const handleBlur = (
    itemId: number,
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const newQuantity = Number.parseInt(e.target.value);
    if (!Number.isNaN(newQuantity)) {
      updateQuantity(itemId, newQuantity);
    }
  };

  // Function to remove all items from the cart
  const removeAllItems = () => {
    updateCartItems([]);
    setCartItemsDetails([]);
    setItemCounts({});
  };

  return (
    <Box>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {totalPrice > 0 ? (
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign={"center"}>
              Your Cart:
            </Text>
          ) : (
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign={"center"}>
              Cart is empty
            </Text>
          )}
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={5}
          >
            {cartItemsDetails.map((item: Item) => (
              <Box
                key={item.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                mb={4}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} image`}
                  width={"100%"}
                />
                <Box p={4} m={"auto"} textAlign={"center"}>
                  <Text fontWeight="semibold" fontSize="lg" mb={1}>
                    {item.name}
                  </Text>
                  <Text color="gray.500" fontSize="sm" mb={1}>
                    {item.description}
                  </Text>
                  <Text fontSize="xl" fontWeight="bold" mb={1}>
                    ₦ {(item.price * itemCounts[item.id]).toLocaleString()}
                  </Text>
                  <Text fontSize="sm">Quantity:</Text>{" "}
                  <Button
                    onClick={() => {
                      removeFromCart(item.id);
                      updateQuantity(item.id, itemCounts[item.id] - 1);
                      // window.location.reload();
                    }}
                  >
                    -
                  </Button>{" "}
                  <Input
                    type="number"
                    placeholder={itemCounts[item.id].toString()}
                    onChange={(e) => {
                      const newQuantity = Number.parseInt(e.target.value);
                      if (!Number.isNaN(newQuantity)) {
                        updateCartWithQuantity(item.id, newQuantity);
                        updateQuantity(item.id, newQuantity);
                      }
                    }}
                    onBlur={(e) => {
                      handleBlur(item.id, e);

                      // window.location.reload();
                    }}
                    min={0}
                    max={99}
                    w="40%"
                  />{" "}
                  <Button
                    onClick={() => {
                      addToCart(item.id);
                      updateQuantity(item.id, itemCounts[item.id] + 1);
                      // window.location.reload();
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Box textAlign="center" margin={"auto"}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Total: ₦ {totalPrice.toLocaleString()}
            </Text>
            <Link to={"/Bought"}>
              <Button colorScheme="blue" mr={2}>
                Checkout
              </Button>
            </Link>
            <Button
              colorScheme="red"
              onClick={() => {
                removeAllItems();
                // window.location.reload();
              }}
            >
              Remove All Items
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Checkout;
