import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ErrorBoundary() {
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
      <GridItem pl="2" area="main" id="error-page" margin="auto" h="100vh">
        <Center height="70vh">
          <div>
            <Heading>Oops!</Heading>
            <br></br>
            <Text as="b">Page not found</Text>
            <br></br>
            <Text as="i">Error 404</Text>
            <br></br>
            <Text marginTop="5%">
              Click on{" "}
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Text as="b">Our logo</Text>
              </Link>{" "}
              to go back to home.
            </Text>
          </div>
        </Center>
      </GridItem>
    </Grid>
  );
}
