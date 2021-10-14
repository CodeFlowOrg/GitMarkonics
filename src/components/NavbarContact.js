import React from "react";
import "./nav-head.css";
import "./Navbar.css";
import { GrHome, GrLogin } from "react-icons/gr";
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
        width = "100px"
        className = "logo" / >
        <
        Spacer / >
        <
        Stack direction = "row"
        spacing = { 2 } >
        <
        Link to = "/" >
        <
        Button leftIcon = { < GrHome / > }
        colorScheme = "purple"
        variant = "solid"
        className = "home" >
        Home <
        /Button> <
        /Link> <
        Link to = "/login" >
        <
        Button leftIcon = { < GrLogin / > }
        colorScheme = "blue"
        variant = "solid"
        className = "login" >
        Login <
        /Button> <
        /Link> <
        Link to = "/register" >
        <
        Button leftIcon = { < GrLogin / > }
        colorScheme = "orange"
        variant = "solid"
        className = "login" >
        Register <
        /Button> <
        /Link> <
        /Stack> <
        /Flex> <
        /Box>
    );
}

export default NavHeader;