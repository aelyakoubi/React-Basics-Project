import { Flex, Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";
import "../index.css";

const RecipesPage = ({ recipes }) => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Welcome to Max Recipe Checker!";

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      width="100%"
      bg="gray.800"
      color="white"
      px={4}
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="blue.300">
            <Center>{greeting}</Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />

          {/* Use RecipeItems to render recipe cards */}
          <RecipeItems recipes={recipes} onClick={setUserRecipe} />
        </>
      )}
    </Flex>
  );
};

export default RecipesPage;
