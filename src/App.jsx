import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth0ProviderWrapper from "../Auth0ProviderWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipesPage from "./pages/RecipesPage";
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
              <Routes>
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
