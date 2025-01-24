import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";
import "../recipes.css";
import "../index.css";

const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Winc Recipe Checker";

  return (
    <div className="app">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading size="2xl" mb={-30} color="blue.200">
            <Center h="30vh" flexDir="column">
              {greeting}
            </Center>
          </Heading>

          <RecipeSearch onClick={setUserRecipe} />
        </>
      )}
    </div>
  );
};

export default RecipesPage;
