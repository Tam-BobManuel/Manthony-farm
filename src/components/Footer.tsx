import { Text, Link, Flex, Box } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "1%",
        textAlign: "center",
      }}
    >
      <Text as="b">Proudly made in 🇳🇬 Port-Harcourt by Tam</Text>
      <Box margin="0%" textAlign="center">
        <Flex justifyContent="center">
          <Link href="https://github.com/Tam-BobManuel" isExternal margin="1%">
            <FaGithub />
          </Link>{" "}
          <Link href="https://twitter.com/tam_webdev" isExternal margin="1%">
            <FaTwitter />
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/in/tam-bob-manuel-191526219/"
            isExternal
            margin="1%"
          >
            <FaLinkedin />
          </Link>{" "}
          <Link href="mailto:bglorytb@gmail.com" margin="1%">
            <MdEmail />
          </Link>
        </Flex>
      </Box>
      <Text as="b">Copyright &copy; {currentYear}</Text>
    </footer>
  );
}

export default Footer;
