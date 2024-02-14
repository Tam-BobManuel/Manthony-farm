import { useColorMode, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo/Gold-manthony-high-resolution-logo-transparent.png";
import logoDark from "../assets/logo/manthony-high-resolution-logo-black-transparent.png";

const NavLogo = () => {
  const { colorMode } = useColorMode();

  // Determine which logo to use based on the color mode
  const logo = colorMode === "light" ? logoDark : logoLight;
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Box>
        <Image src={logo} boxSize="50px" alt="The Manthony Farm's Logo" />
      </Box>
    </Link>
  );
};

export default NavLogo;
