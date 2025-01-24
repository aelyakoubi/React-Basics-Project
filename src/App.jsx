import { ChakraProvider, Box, Flex, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth0ProviderWrapper from "../Auth0ProviderWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipesPage from "./pages/RecipesPage"; // Use as homepage
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <ChakraProvider>
      <Auth0ProviderWrapper>
        <Router>
          <Flex direction="column" minHeight="100vh">
            <Header />
            <Box as="main" flex="1" width="100%">
              {/* Content is centered in each page by using the Center component */}
              <Routes>
                {/* Set RecipesPage as the default route */}
                <Route path="/" element={<RecipesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Box>
            <Footer />
          </Flex>
        </Router>
      </Auth0ProviderWrapper>
    </ChakraProvider>
  );
};

export default App;
