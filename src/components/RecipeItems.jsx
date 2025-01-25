import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  if (!recipes || recipes.length === 0) {
    return <Text>No recipes available</Text>; // Added a fallback message
  }

  return (
    <Flex
      gap={16}
      w={["full", "90%"]}
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="center" // Center the content horizontally
      alignItems="center"
    >
      {recipes.map(({ recipe }) => (
        <RecipeItem key={recipe.label} recipe={recipe} onClick={onClick} />
      ))}
    </Flex>
  );
};
