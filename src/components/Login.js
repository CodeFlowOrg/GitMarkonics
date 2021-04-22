import React from "react";
import {NavLink} from 'react-router-dom'
import "./Login.css";
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
import { RiAccountPinBoxFill } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

function Login({headText, btnText, linkText, register}) {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__containerTop">
          <div className="login__img"></div>
          <p>Add a crisp to your bulky documents !!</p>
          <h4>Welcome to the website</h4>
        </div>
        <div className="login__containerBottom">
          <VStack className='input__container' w="65%"
          m="auto">
            <Heading
              fontSize="1.2rem"
              color="blue.500"
              fontWeight="semibold"
              py={3}
              >
              {headText}
            </Heading>
              {register &&
              <HStack className='login__input' w='100%'>
                <Input   borderRadius='full' backgroundColor='gray.200' placeholder="First name" />
                <Input  borderRadius='full' backgroundColor='gray.200' placeholder="Last name" />
              </HStack>
              }
            <InputGroup w='100%' borderRadius="full" bgColor="gray.200">
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <RiAccountPinBoxFill color="#C6C6E8" fontSize="2.1rem" />
                }
              />
              <Input
                borderRadius="full"
                type="text"
                placeholder="Username"
                paddingLeft="60px"
              />
            </InputGroup>
            <InputGroup className='login__input' w='100%' borderRadius="full" bgColor="gray.200">
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <RiLockPasswordFill color="#C6C6E8" fontSize="2.1rem" />
                }
              />
              <Input
                type="password"
                borderRadius="full"
                placeholder="Password"
                paddingLeft="60px"
              />
            </InputGroup>
            {
              register && 
              <InputGroup className='login__input' w='100%' borderRadius="full" bgColor="gray.200">
              <InputLeftElement
                margin="0 20px"
                pointerEvents="none"
                children={
                  <RiLockPasswordFill color="#C6C6E8" fontSize="2.1rem" />
                }
              />
              <Input
                type="password"
                borderRadius="full"
                placeholder="Confirm Password"
                paddingLeft="60px"
              />
            </InputGroup>
            }
            <HStack className="login__btn" alignSelf='flex-end' >
            <Button
              colorScheme="pink"
              px="6"
              size="sm"
              fontWeight="bold"
              className='loginBtn'
            >
              {btnText}
            </Button>
            {register ?
            <NavLink to='/login'>
           <Link  fontSize='sm' textDecoration="underline" color="blue">
           {linkText}
         </Link>
         </NavLink>:
         <NavLink to='/register'>
          <Link to='/register' fontSize='sm' textDecoration="underline" color="blue">
          {linkText}
        </Link>  
        </NavLink>
          }
            </HStack>
          </VStack>
        </div>
      </div>
    </div>
  );
}

export default Login;
