import { Center, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Center
      gap={4}
      cursor="pointer"
      onClick={() => onClick(recipe)}
      display="flex"
      ml={4}
      mb={6}
      flexDirection="column"
    >
      <Image
        src={recipe.image}
        alt={recipe.alt || "Recipe Image"}
        width="100%"
        maxW="330px"
        height="auto"
        objectFit="cover"
        borderRadius="lg"
        border="1px solid gray"
      />
      <Box
        textAlign="center"
        bg="gray.100"
        p={4}
        borderRadius="lg"
        boxShadow="sm"
        mt={4}
      >
        <Text fontSize="sm" color="gray.500">{recipe.mealType || "No meal type"}</Text>
        <Text fontSize="2xl" fontWeight="bold" mt={2}>
          {recipe.mealType} {recipe.dishType} {/* Removed label */}
        </Text>
        <Text fontSize="sm" bg="green.200" p={1} borderRadius="md">{recipe.dietLabels.join(", ")}</Text>
        <Text fontSize="sm" mt={2}>Dish: {recipe.dishType || "No dish type available"}</Text>
        <Text fontSize="sm" bg="red.200" p={1} borderRadius="md" mt={2}>Cautions: {recipe.cautions.join(", ")}</Text>
      </Box>
    </Center>
  );
};
