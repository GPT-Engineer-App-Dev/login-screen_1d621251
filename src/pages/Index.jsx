import React from "react";
import { Box, Button, Container, Divider, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent>
      <Box w="full" maxW="md" mx="auto" mt="10" p="8" bg={useColorModeValue("white", "gray.700")} boxShadow={"2xl"} rounded="lg">
        <Stack spacing="4">
          <Heading textAlign="center">Login</Heading>
          <Divider />
          <Stack spacing="6">
            <Input placeholder="Email address" />
            <Button colorScheme="blue">Login with Email</Button>
            <Text textAlign="center">OR</Text>
            <Button leftIcon={<FaGoogle />} colorScheme="red">
              Login with Google
            </Button>
            <Button leftIcon={<FaApple />} colorScheme="black" variant="solid">
              Login with Apple
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
