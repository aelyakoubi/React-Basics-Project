import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'; // React Router
import Auth0ProviderWrapper from '../Auth0ProviderWrapper';
import RoutesConfig from '../routes'; // Updated import to RoutesConfig
import Layout from '../src/Layout'; // Adjust the import if needed

// Custom theme to enable dark mode support
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Default to light mode
    useSystemColorMode: false, // Optionally you can set this to true to follow the system's color mode
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Auth0ProviderWrapper>
        <Router>
          <Layout>
            <RoutesConfig /> {/* Use the new RoutesConfig component */}
          </Layout>
        </Router>
      </Auth0ProviderWrapper>
    </ChakraProvider>
  );
};

export default App;
