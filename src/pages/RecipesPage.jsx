import { Center, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeSearch } from '../components/RecipeSearch';
import Welcome from '../components/Welcome';

const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState(null);
  const greeting = 'Welcome to Max Recipe Checker!';
  const navigate = useNavigate();

  const handleRecipeClick = (recipe) => {
    navigate('/recipe-choice-page', { state: { recipe } }); // ✅ Correct route format
  };

  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      minHeight='100vh'
      width='100%'
      px={['2', '4', '8']} // Responsive padding
    >
      {/* Welcome component will display a greeting or login prompt */}
      <Welcome />

      {userRecipe ? (
        // ✅ Only navigate onClick instead of calling function directly in JSX
        handleRecipeClick(userRecipe)
      ) : (
        <>
          <Heading size={['xl', '2xl', '3xl']} mb={8} color='blue.200'>
            <Center>{greeting}</Center>
          </Heading>

          {/* ✅ Only render RecipeSearch once */}
          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </Flex>
  );
};

export default RecipesPage;
