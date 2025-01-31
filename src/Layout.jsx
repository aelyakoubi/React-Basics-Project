import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import LogoutButton from './components/LogoutButton';

const Layout = ({ children }) => {
  const bgColor = useColorModeValue('white', 'black');
  const textColor = useColorModeValue('black', 'white');

  return (
    <Flex direction='column' minHeight='100vh' bg={bgColor} color={textColor}>
      <Header />
      <LogoutButton />
      <Box as='main' flex='1' width='100%' p={4} bg={bgColor} color={textColor}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
