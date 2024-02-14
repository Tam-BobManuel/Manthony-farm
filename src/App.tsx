import { Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Shop from "./pages/Shop";
import ErrorBoundary from "./components/ErrorBoundary";
import Checkout from "./pages/Checkout";
import ContactMe from "./pages/ContactMe";
import Bought from "./pages/Bought";

function App() {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: `"nav" 
                  "main"
                  "footer"`,
          lg: `"nav nav" 
                "main main"
                "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem pl="2" area="nav" padding={0}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" area="main" padding={0}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contactTam" element={<ContactMe />} />
            <Route path="/Bought" element={<Bought />} />
            {/* Wildcard route for handling 404 errors */}
            <Route path="*" element={<ErrorBoundary />} />
          </Routes>
        </GridItem>
        <GridItem pl="2" area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
