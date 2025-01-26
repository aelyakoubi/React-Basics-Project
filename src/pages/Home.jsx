import { Center, Heading, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";
import { useAuth0 } from "@auth0/auth0-react"; // Auth0 hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Welcome to Max Recipe Checker!";
  const { logout, isAuthenticated } = useAuth0(); // Add isAuthenticated
  const navigate = useNavigate();  // Initialize navigate

  // Handle logout action and navigate to the homepage ('/')
  const handleLogout = () => {
    logout({ returnTo: window.location.origin }); // Log out and redirect to the same page
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <>    {/* Conditional rendering of Log Out Button */}
    {isAuthenticated && (
      <Button mt={4} colorScheme="red" onClick={handleLogout}>
        Log Out
      </Button>
    )}
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      width="100%"
      bg="white"
      color="black"
      px={["2", "4", "8"]} // responsive padding
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size={["xl", "2xl", "3xl"]} mb={8} color="blue.200">
            <Center>{greeting}</Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}

   
    </Flex>
    </>
  );
};

export default Home;
