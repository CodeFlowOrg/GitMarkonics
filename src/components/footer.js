import React from "react";
import "./footer.css";
import { Flex, Box, Spacer, Stack } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <Box className="footer" p={2}>
      <Flex direction="row " >
        <Spacer />
         <Stack direction="row" spacing={2} alignItems="center">
            {<p>Copyright &copy; 2021</p>}
            <ScrollToTop smooth color=" #660066" />
          </Stack>
      </Flex>
    </Box>
  );
}

export default Footer;

// import React from "react";
// import "./nav-head.css";
// import "./Navbar.css";
// import { GrHome } from "react-icons/gr";
// import { Button, Spacer, Flex, Stack, Box } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// import logo from "../assets/GitMarkonics_white.png";
// function NavHeader() {
//   return (
//     <Box className="nav_header" p={1}>
//       <Flex direction="row " >
//         <img src={logo} alt="heading" width="100px"  className="logo"/>
//         <Spacer />
//         <Stack direction="row" spacing={2}>
//           <Link to="/">
//             <Button leftIcon={<GrHome />} colorScheme="pink" variant="solid" className="home">
//               Home
//             </Button>
//           </Link>
//         </Stack>
//       </Flex>
//     </Box>
//   );
// }