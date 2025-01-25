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
      bg="gray.900"
      color="white"
      px={{ base: 4, md: 8 }} // Responsive padding: smaller on mobile
      textAlign="center" // Center text content on mobile
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading
            size={{ base: "xl", md: "2xl" }} // Responsive font size
            mb={{ base: 6, md: 8 }} // Responsive margin
            color="blue.200"
          >
            <Center>{greeting}</Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </Flex>
  );
};

export default RecipesPage;
