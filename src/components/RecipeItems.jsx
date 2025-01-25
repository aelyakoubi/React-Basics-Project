import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      gap={16}
      w={["full", "90%"]}
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="even"
      alignItems="center"
    >
      {recipes.map(({ recipe }) => (
        <RecipeItem key={recipe.label} recipe={recipe} onClick={onClick} />
      ))}
    </Flex>
  );
};
