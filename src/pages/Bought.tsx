import { useEffect, useState } from "react";
import shopData from "../data/shopData.json";
import { Grid, GridItem, Center, Heading } from "@chakra-ui/react";

interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Bought = () => {
  const [itemsBought, setItemsBought] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch cart items from session storage
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");

    // Fetch item details from shopData.json and set state
    const items = cartItems.map(
      (itemId: number) =>
        shopData.find((item: Item) => item.id === itemId) || {
          id: 0,
          name: "",
          image: "",
          description: "",
          price: 0,
        }
    );

    setItemsBought(items);

    // Clear session storage when component unmounts (page is exited)
    return () => {
      setTimeout(() => {
        sessionStorage.removeItem("cartItems");
      }, 500);
    };
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" 
                  "main"`,
        lg: `"nav nav" 
                "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area="main" margin="auto">
        <Center height="70vh">
          {itemsBought.length > 0 ? (
            <div>
              <Heading>You have successfully bought:</Heading>
              <ul>
                {/* Create a Set to store unique items */}
                {Array.from(new Set(itemsBought)).map((item, index) => {
                  // Count the occurrences of the current item
                  const itemCount = itemsBought.filter(
                    (i) => i === item
                  ).length;
                  return (
                    <li key={index}>
                      {item.name}
                      {" X " + itemCount}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <p>No items bought.</p>
          )}
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Bought;
