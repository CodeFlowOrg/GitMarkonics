import "./nav-head.css";
import { GrLogin } from "react-icons/gr";
import {
  Button,
  Spacer,
  Flex,
  Stack,
  Box
} from "@chakra-ui/react";

import logo from "../assets/GitMarkonics_white.png";

function NavHeader() {
  return (
    <Box className="nav_header" p={1}>
      <Flex direction="row ">
       
        <img src={logo} alt="heading" width="80px" />
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
