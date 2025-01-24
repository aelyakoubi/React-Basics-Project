import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" position="sticky" bottom={0} bg="teal.500" p={5} mt={5} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text color="white">&copy; {new Date().getFullYear()} Rijschool. All rights reserved.</Text>
        <HStack spacing={4}>
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="white">Home</Button>
          <Button as={Link} to="/About" colorScheme="teal" variant="link" color="white">About</Button>
          <Button as={Link} to="/Contact" colorScheme="teal" variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
