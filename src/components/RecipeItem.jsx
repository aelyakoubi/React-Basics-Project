import { Wrap, WrapItem } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Wrap
      spacing="30px"
      justify="center"
      p={4}
      wrap="wrap"
    >
      {recipes.map(({ recipe }) => (
        <WrapItem key={recipe.label}>
          <RecipeItem recipe={recipe} onClick={onClick} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
