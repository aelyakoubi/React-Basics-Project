import { Box, Flex, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Box as="footer" position="sticky" bottom={0} bg="teal.500" p={5} mt={5} boxShadow="md">
      <Flex justify="center" align="center">
       
        <HStack spacing={6}>
        <Text textAlign="center" color="white">&copy; {new Date().getFullYear()} Max Recipe Checker. All rights reserved.</Text>
        <Button as={Link} to="/" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">About</Button>
          <Button as={Link} to="/contact" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">Contact</Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
