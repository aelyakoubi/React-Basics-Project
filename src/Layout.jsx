import { Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg="gray.50" // Background for the entire layout
      color="black" // Default text color
    >
      <Header />
      <Box 
        as="main" 
        flex="1" 
        width="100%" 
        p={4} 
        bg="white" // Background for the main content
        boxShadow="sm" // Optional: Add a shadow for better separation
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
