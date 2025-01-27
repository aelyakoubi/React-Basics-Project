// src/pages/Home.jsx
import { Center, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import { RecipeChoice } from '../components/RecipeChoice';
import { RecipeSearch } from '../components/RecipeSearch';

const RecipePage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = 'Welcome to Max Recipe Checker!';

  // Debugging: Log userRecipe to the console
  console.log('userRecipe:', userRecipe);

  return (
    <>
      <LogoutButton />

      <Flex
        direction='column'
        align='center'
        justify='center'
        minHeight='100vh'
        width='100%'
        bg='white'
        color='black'
        px={['2', '4', '8']}
      >
        {userRecipe ? (
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
    </>
  );
};

export default RecipePage;
