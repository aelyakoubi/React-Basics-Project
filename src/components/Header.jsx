import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate import
import SocialIcons from './SocialIcons';

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode(); // Hook to toggle color mode
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate(); // Use navigate hook

  // Get the current color mode for button text
  const buttonText = useColorModeValue('Dark Mode', 'Light Mode');

  // Adjust text size for small screens
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box
      position='sticky'
      top={0}
      zIndex={5}
      bg='teal.500'
      boxShadow='md'
      width='100%'
    >
      <Flex direction='column' align='center' p={2}>
        {/* Clickable Logo */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Heading
            color='white'
            size='xl'
            fontSize={{ base: 'lg', md: 'xl' }}
            textAlign='center'
            userSelect='none' // Prevents text copying
          >
            Recipe Checker
          </Heading>
        </Link>

        <Flex justify='space-between' align='center' width='100%'>
          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={Link}
              to='/'
              variant='link'
              color='pink.100'
              fontSize='lg'
            >
              Home
            </Button>
            <Button
              as={Link}
              to='/about'
              variant='link'
              color='pink.100'
              fontSize='lg'
            >
              About
            </Button>
            <Button
              as={Link}
              to='/contact'
              variant='link'
              color='pink.100'
              fontSize='lg'
            >
              Contact
            </Button>
          </HStack>

          {/* Mobile Hamburger Menu Button */}
          {isMobile && !isOpen && (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onToggle}
              color='white'
              variant='outline'
              aria-label='Open Menu'
              zIndex={10}
            />
          )}

          {/* Dark/Light Mode Toggle Button */}
          <Button
            onClick={toggleColorMode}
            colorScheme='grey'
            variant='outline'
            fontSize={buttonSize} // Responsive font size
          >
            {buttonText}
          </Button>
        </Flex>

        {/* Sliding Mobile Menu */}
        {isOpen && (
          <MotionBox
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            position='fixed'
            top={0}
            right={0}
            width='60vw'
            height='100vh'
            bg='teal.700'
            p={5}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            zIndex={20}
            boxShadow='lg'
          >
            <IconButton
              icon={<CloseIcon />}
              onClick={onToggle}
              color='white'
              variant='outline'
              aria-label='Close Menu'
              position='absolute'
              top='1rem'
              right='1rem'
            />

            <Button
              as={Link}
              to='/'
              variant='link'
              color='white'
              fontSize='2xl'
              mb={4}
              onClick={() => {
                onToggle();
                navigate('/');
              }}
            >
              Home
            </Button>
            <Button
              as={Link}
              to='/about'
              variant='link'
              color='white'
              fontSize='2xl'
              mb={4}
              onClick={onToggle}
            >
              About
            </Button>
            <Button
              as={Link}
              to='/contact'
              variant='link'
              color='white'
              fontSize='2xl'
              mb={6}
              onClick={onToggle}
            >
              Contact
            </Button>

            <SocialIcons />
          </MotionBox>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
