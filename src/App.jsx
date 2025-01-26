import Auth0ProviderWrapper from "../Auth0ProviderWrapper";
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../src/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router
import { routesConfig } from '../Routes'; // Adjusted import

const App = () => {
  return (
    <ChakraProvider>
      <Auth0ProviderWrapper>
        <Router>
          <Layout>
            <Routes>
              {routesConfig.map(({ path, component: Component }, index) => (
                // Wrap the component in JSX syntax: <Component />
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Routes>
          </Layout>
        </Router>
      </Auth0ProviderWrapper>
    </ChakraProvider>
  );
};

export default App;
