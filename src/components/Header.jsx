import { Box, Flex, Heading, Button, useDisclosure, IconButton, HStack, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="sticky" top={0} zIndex={10} bg="teal.500" boxShadow="md">
      <Flex p={5} justify="space-between" align="center">
        <Heading color="white" size="xl">Max Recipe Checker</Heading>
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {/* Links with larger font size */}
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">About</Button>
          <Button as={Link} to="/contact" colorScheme="teal" variant="link" color="pink.100" fontSize="xl">Contact</Button>
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
          {/* Links with larger font size in mobile menu */}
          <Button as={Link} to="/" colorScheme="teal" variant="link" color="white" width="full" mb={2} fontSize="xl">Home</Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="link" color="white" width="full" mb={2} fontSize="xl">About</Button>
          <Button as={Link} to="/contact" colorScheme="teal" variant="link" color="white" width="full" mb={2} fontSize="xl">Contact</Button>
        </Box>
      )}
    </Box>
  );
}

export default Header;
