import { Center, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Welcome to Max Recipe Checker!";

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      width="100%"
      bg="white"
      color="black"
      px={4}
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="blue.200">
            <Center>{greeting}</Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </Flex>
  );
};

export default RecipesPage;
