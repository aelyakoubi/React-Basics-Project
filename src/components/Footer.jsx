import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box as='footer' bg='teal.500' color='white' p={4} width='100%'>
      {/* Website Name in Separate Box */}
      <Box textAlign='center' mb={2} p={2} bg='teal.600' borderRadius='md'>
        <Text
          fontSize={isSmallScreen ? 'md' : 'lg'}
          fontWeight='bold'
          userSelect='none' // Disable text selection to protect against copying
        >
          {/* Clickable Website Name */}
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
            Max Recipe Checker © 2025
          </Link>
        </Text>
      </Box>

      <Flex
        direction={isSmallScreen ? 'column' : 'row'}
        justify='space-between'
        align='center'
        wrap='wrap'
      >
        {/* Navigation Links in Footer */}
        <HStack
          spacing={4}
          justify='center'
          wrap='wrap'
          mb={isSmallScreen ? 3 : 0}
        >
          <Button
            as={Link}
            to='/terms'
            variant='link'
            color='white'
            fontSize='sm'
          >
            Terms
          </Button>
          <Button
            as={Link}
            to='/privacy'
            variant='link'
            color='white'
            fontSize='sm'
          >
            Privacy
          </Button>
          <Button
            as={Link}
            to='/contact'
            variant='link'
            color='white'
            fontSize='sm'
          >
            Contact
          </Button>
        </HStack>

        {/* Social Icons */}
        <SocialIcons />
      </Flex>
    </Box>
  );
};

export default Footer;
