// NavBar.tsx
import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
import ProfileIcon from "./ProfileIcon";
import NavLogo from "./NavLogo";
import CartIcon from "./CartIcon";
import ShopLink from "./ShopLink";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding={2} boxShadow="lg">
      <NavLogo />
      <HStack>
        <ShopLink />
        <CartIcon />
        <ProfileIcon />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
}

export default NavBar;
