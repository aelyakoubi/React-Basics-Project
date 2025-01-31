import { useAuth0 } from '@auth0/auth0-react';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RecipeChoice } from '../components/RecipeChoice';
import { RecipeSearch } from '../components/RecipeSearch';
import Welcome from '../components/Welcome';

const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const { isAuthenticated, user } = useAuth0(); // Directly using Auth0 hook
  const greeting = 'Welcome to Max Recipe Checker!';

  // Add a useEffect to update the state when isAuthenticated changes
  useEffect(() => {
    // Here, you can perform logic like fetching user-related data after they log in
    if (isAuthenticated) {
      console.log('User is authenticated:', user);
    }
  }, [isAuthenticated, user]); // Dependencies to trigger when authentication changes

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      minHeight='100vh'
      width='100%'
      px={['2', '4', '8']} // responsive padding
    >
      <Welcome />
      {isAuthenticated && userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size={['xl', '2xl', '3xl']} mb={8} color='blue.200'>
            <Center>{greeting}</Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </Flex>
  );
};

export default RecipesPage;
