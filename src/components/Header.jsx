import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position='sticky' top={0} zIndex={5} bg='teal.500' boxShadow='md'>
      <Flex p={1} justify='space-between' align='center'>
        <Heading color='white' size='xl'>
          Max Recipe Checker
        </Heading>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button
            as={Link}
            to='/'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Home
          </Button>
          <Button
            as={Link}
            to='/about'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            About
          </Button>
          <Button
            as={Link}
            to='/contact'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Contact
          </Button>
        </HStack>

        {/* Mobile Hamburger Menu Button - Always Visible */}
        {isMobile && !isOpen && (
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onToggle}
            color='white'
            variant='outline'
            aria-label='Open Menu'
          />
        )}
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
          {/* Close Button Inside the Menu */}
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

          {/* Navigation Links */}
          <Button
            as={Link}
            to='/'
            variant='link'
            color='white'
            fontSize='2xl'
            mb={4}
            onClick={onToggle}
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

          {/* Social Icons */}
          <SocialIcons />
        </MotionBox>
      )}
    </Box>
  );
};

export default Header;
