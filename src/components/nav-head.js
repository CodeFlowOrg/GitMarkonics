import "./nav-head.css";
import { GrLogin } from "react-icons/gr";
import {
  Button,
  Spacer,
  Flex,
  Stack,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/white heading.png";

function NavHeader() {
  return (
    <Box className="nav_header" p={1}>
      <Flex direction="row" spacing={2}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={BiMenu}
            bg="#F0A6CA"
            border="0.5px"
            borderColor="#F0E6EF"
            p={1}
            m={2}
            size="xs"
            variant="solid"
            m={1}
          />
          <MenuList>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘N">New Window</MenuItem>
            <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
            <MenuItem command="⌘O">Open File...</MenuItem>
          </MenuList>
        </Menu>
        <img src={logo} alt="heading" width="120px" class="center" />
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
