import { Center, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Center
      gap={17}
      cursor={"pointer"}
      onClick={() => onClick(recipe)}
      display="flexbox"
      ml={50}
    >
      <Image
        src={recipe.image}
        w={330}
        h={300}
        borderWidth={3}
        alt={recipe.alt}
        bgColor="none"
        borderTopRightRadius={"2xl"}
        borderTopLeftRadius={"2xl"}
      />
      <Box
        lineHeight={1.9}
        align="center"
        bg={"gray.100"}
        borderBottomLeftRadius={"2xl"}
        borderBottomRightRadius={"2xl"}
      >
        <div>{recipe.mealType} </div>
        <Text Text fontSize={"2xl"} fontWeight={"100"}>
          <div>{recipe.label} </div>
        </Text>

        <Text w={"fit-content"} fontSize={"1xl"} bg="green.200">
          <div>{recipe.dietLabels}</div>
        </Text>
        <div>Dish: {recipe.dishType}</div>

        <Text w={"fit-content"} bg="red.200">
          <div>Cautions: {recipe.cautions} </div>
        </Text>
      </Box>
    </Center>
  );
};
