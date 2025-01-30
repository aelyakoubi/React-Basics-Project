import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = ({ children }) => {
  // Get different padding based on screen size
  const padding = useBreakpointValue({ base: 2, sm: 4 });

  // Get background and text colors based on the color mode
  const bgColor = useColorModeValue('gray.50', 'gray.800'); // Light and dark mode background
  const textColor = useColorModeValue('black', 'white'); // Light and dark mode text color

  return (
    <Flex
      direction='column'
      width='100%'
      minHeight='100vh'
      bg={bgColor} // Background for the entire layout, responsive to color mode
      color={textColor} // Text color responsive to color mode
    >
      <Header />
      <Box
        as='main'
        flex='1'
        width='100%'
        p={padding} // Responsive padding
        bg='white' // Background for the main content area
        boxShadow='sm' // Optional: Add a shadow for better separation
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
