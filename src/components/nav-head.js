import React from "react";
import "./nav-head.css";
import { GrLogin } from "react-icons/gr";
import { Button, Spacer, Flex, Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../assets/GitMarkonics_white.png";

function NavHeader() {
    return ( <
        Box className = "nav_header"
        p = { 1 } >
        <
        Flex direction = "row " >
        <
        img src = { logo }
        alt = "heading"
        width = "80px" / >
        <
        Spacer / >
        <
        Stack direction = "row"
        spacing = { 2 } >
        <
        Link to = "/login" >
        <
        Button leftIcon = { < GrLogin / > }
        colorScheme = "pink"
        variant = "solid" >
        Login <
        /Button> < /
        Link > <
        Link to = "/register" >
        <
        Button colorScheme = "white"
        variant = "outline" >
        Register <
        /Button> < /
        Link > <
        Link to = "/contactus" >
        <
        Button leftIcon = { < GrLogin / > }
        colorScheme = "blue"
        variant = "solid" >
        ContactUs <
        /Button> < /
        Link > <
        /Stack> < /
        Flex > <
        /Box>
    );
}

export default NavHeader;