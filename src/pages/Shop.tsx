import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import items from "../data/shopData.json";
import LoadingScreen from "../components/LoadingScreen";
import { updateCartItems, cartItems } from "../hooks/cartData";

interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface User {
  username: string;
  email: string;
}

function Shop() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(loggedInUser));
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5);

    return () => clearTimeout(timer);
  }, []);

  if (!user) {
    navigate("/signup");
    return null;
  }

  const addToCart = (itemId: number) => {
    const newCartItems = [...cartItems, itemId];
    updateCartItems(newCartItems);
  };

  const reloadPageWithScrollPosition = () => {
    const scrollPosition = window.scrollY;
    window.location.reload();
    window.scrollTo(0, scrollPosition);
  };

  const filteredItems = items.filter((item: Item) => {
    if (!searchQuery) {
      return true;
    }
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        padding={5}
      >
        <Input
          placeholder="Search for produce..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mb={{ base: "4", md: "0" }}
          width={{ base: "100%", md: "40%" }}
        />
      </Stack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
          filteredItems.map((item: Item) => (
            <Box
              key={item.id}
              maxW="320px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m="4"
            >
              <Image src={item.image} alt={`item.name " image"`} />
              <Box p="6" textAlign="center">
                <Text fontWeight="semibold" fontSize="lg" mb="2">
                  {item.name}
                </Text>
                <Text color="gray.500" fontSize="sm" mb="2">
                  {item.description}
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  ₦ {item.price.toLocaleString()}
                </Text>
                <Button
                  onClick={() => {
                    addToCart(item.id);
                    reloadPageWithScrollPosition();
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
}

export default Shop;
