import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons'; // Importing social media icons component

const Footer = () => {
  return (
    <Box
      as='footer'
      position='sticky'
      bottom={0}
      bg='teal.500'
      p={1}
      mt={0}
      boxShadow='md'
    >
      <Flex direction='column' align='center'>
        <HStack spacing={6} mb={2}>
          <Button
            as={Link}
            to='/'
            colorScheme='teal'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Home
          </Button>
          <Button
            as={Link}
            to='/about'
            colorScheme='teal'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            About
          </Button>
          <Button
            as={Link}
            to='/contact'
            colorScheme='teal'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Contact
          </Button>
          <Button
            as={Link}
            to='/privacy'
            colorScheme='teal'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Privacy
          </Button>
          <Button
            as={Link}
            to='/terms'
            colorScheme='teal'
            variant='link'
            color='pink.100'
            fontSize='xl'
          >
            Terms
          </Button>
        </HStack>

        {/* Social Media Icons */}
        <SocialIcons />

        <Text textAlign='center' color='white' mt={2}>
          &copy; {new Date().getFullYear()} Max Recipe Checker. All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
