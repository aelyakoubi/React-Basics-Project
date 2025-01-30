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
    <Box
      as='footer'
      bg='teal.500'
      color='white'
      p={4}
      position='relative'
      bottom={0}
      width='100%'
    >
      <Flex
        direction={isSmallScreen ? 'column' : 'row'}
        justify='space-between'
        align='center'
        wrap='wrap' // Ensures content wraps correctly on small screens
      >
        <Text fontSize={isSmallScreen ? 'sm' : 'md'}>
          Max Recipe Checker © 2025
        </Text>

        {/* Navigation Links in Footer */}
        <HStack spacing={4} justify='center' wrap='wrap'>
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
