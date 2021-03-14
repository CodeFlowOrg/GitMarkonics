import "./nav-head.css";
import { GrLogin } from "react-icons/gr";
import { Button, Spacer, Flex, Stack, Box } from "@chakra-ui/react";

function NavHeader() {
  return (
    <Box className="nav_header" p={1}>
      <Flex direction="row" spacing={2}>
        Beautiful readme.md
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Button leftIcon={<GrLogin />} colorScheme="pink" variant="solid">
            Login
          </Button>
          <Button colorScheme="white" variant="outline">
            Register
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default NavHeader;
