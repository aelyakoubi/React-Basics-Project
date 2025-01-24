// Header.jsx
import { Box, Flex, Heading, Button, useDisclosure, IconButton, HStack, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
 // console.log(user);

  return (
    <Box position="sticky" top={0} zIndex={10} bg="teal.500" boxShadow="md">
      <Flex p={5} justify="space-between" align="center">
        <Heading color="white" size="lg">Max Recipe Checker</Heading>
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="white">Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="link" color="white">About</Button>
          <Button as={Link} to="/prices" colorScheme="teal" variant="link" color="white">Prices</Button>
          <Button as={Link} to="/contact" colorScheme="teal" variant="link" color="white">Contact</Button>

          {/* Auth0 login/logout button */}
          {isAuthenticated ? (
            <Button onClick={() => logout({ returnTo: window.location.origin })} colorScheme="teal" variant="link" color="white">Log Out</Button>
          ) : (
            <Button onClick={() => loginWithRedirect()} colorScheme="teal" variant="link" color="white">Login</Button>
          )}
        </HStack>

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            color="white"
            variant="outline"
            aria-label="Toggle Navigation"
          />
        )}
      </Flex>

      {/* Mobile Menu Dropdown */}
      {isOpen && isMobile && (
        <Box bg="teal.500" p={4} display={{ base: 'block', md: 'none' }}>
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="white" width="full" mb={2}>Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="link" color="white" width="full" mb={2}>About</Button>
          <Button as={Link} to="/contact" colorScheme="teal" variant="link" color="white" width="full" mb={2}>Contact</Button>
          
          {/* Auth0 login/logout button in mobile menu */}
          {isAuthenticated ? (
            <Button onClick={() => logout({ returnTo: window.location.origin })} colorScheme="teal" variant="link" color="white" width="full">Log Out</Button>
          ) : (
            <Button onClick={() => loginWithRedirect()} colorScheme="teal" variant="link" color="white" width="full">Login</Button>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Header;
