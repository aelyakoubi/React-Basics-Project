import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Box as="footer" position="sticky" bottom={0} bg="teal.500" p={5} mt={5} boxShadow="md">
      <Flex justify="center" align="center">
       
        <HStack spacing={6}>
        <Text textAlign="center" color="white">&copy; {new Date().getFullYear()} Max Recipe Checker. All rights reserved.</Text>
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="pink.200">Home</Button>
          <Button as={Link} to="/About" colorScheme="teal" variant="link" color="pink.200">About</Button>
          <Button as={Link} to="/Contact" colorScheme="teal" variant="link" color="pink.200">Contact</Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
