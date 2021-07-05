import React from "react";
import "./register.css";
import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  VStack,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill} from "react-icons/bs";

function Register() {
  return (
    <div className="Register">
      <div className="Register__container">
        <div className="Register__containerTop">
          <div className="Register__img"></div>
          <p>Add a crisp to your bulky documents !!</p>
          <h4>Welcome to the website</h4>
        </div>
        <div className="Register__containerBottom">
          <VStack className="input__container" w="65%" m="auto">
            <Heading
              fontSize="1.2rem"
              color="blue.500"
              fontWeight="semibold"
              className="Register_Here"
              data-text="Register_Here..."
            >
              Register_Here... 
            </Heading>
            <InputGroup w="95%" borderRadius="full">
              <Input
                borderRadius="full"
                type="tel"
                placeholder="First Name"
                bgColor="gray.200"
              />
              <Input
                borderRadius="full"
                type="tel"
                placeholder="Last Name"
                bgColor="gray.200"
                marginLeft="4px"
              />
            </InputGroup>
            <InputGroup w="95%" borderRadius="full" bgColor="gray.200">
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <BsFillPersonFill color="#C6C6E8" fontSize="1.6rem" />
                }
              />
              <Input
                borderRadius="full"
                type="tel"
                placeholder="Username"
                paddingLeft="60px"
              />
            </InputGroup>
            <InputGroup
              className="Register__input"
              w="95%"
              borderRadius="full"
              bgColor="gray.200"
            >
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <BsFillLockFill color="#C6C6E8" fontSize="1.4rem" />
                }
              />
              <Input
                type="tel"
                borderRadius="full"
                placeholder="Password"
                paddingLeft="60px"
              />
            </InputGroup>
            <InputGroup
              className="Register__input"
              w="95%"
              borderRadius="full"
              bgColor="gray.200"
            >
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <BsFillLockFill color="#C6C6E8" fontSize="1.4rem" />
                }
              />
              <Input
                type="tel"
                borderRadius="full"
                placeholder=" Confirm Password"
                paddingLeft="60px"
              />
            </InputGroup>
            <HStack className="Register__btn" alignSelf="flex-end">
              <Button
                colorScheme="pink"
                px="6"
                size="sm"
                fontWeight="bold"
                className="RegisterBtn"
              >
                Register
              </Button>
              <Link fontSize="sm" textDecoration="underline" color="blue">
                Forgot password?
              </Link>
            </HStack>
          </VStack>
        </div>
      </div>
    </div>
  );
}

export default Register;
