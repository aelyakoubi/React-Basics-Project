// src/pages/Home.jsx
import { Center, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const [userRecipe, setUserRecipe] = useState();
  const greeting = "Welcome to Max Recipe Checker!";

  return (
    <>
      <LogoutButton /> 

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
