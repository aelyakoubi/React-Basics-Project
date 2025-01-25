import { Box, Image, Text, Flex } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Flex
      direction="column"
      w="330px"
      h="auto"
      cursor="pointer"
      onClick={() => onClick(recipe)}
      borderWidth={3}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }} // Hover effect for scaling
      mb={8} // Margin bottom for spacing
    >
      <Image
        src={recipe.image}
        alt={recipe.alt}
        w="100%"
        h="220px"
        objectFit="cover"
        borderBottomRadius="lg"
      />
      <Box p={4} bg="white">
        <Text fontSize="lg" fontWeight="bold" color="teal.500">
          {recipe.mealType}
        </Text>
        <Text fontSize="2xl" fontWeight="600" mt={2}>
          {recipe.label}
        </Text>
        <Text fontSize="lg" mt={1} bg="green.300" p={1} borderRadius="md" display="inline-block">
          {recipe.dietLabels}
        </Text>
        <Text fontSize="sm" mt={2}>
          <strong>Dish:</strong> {recipe.dishType}
        </Text>
        <Text fontSize="sm" mt={1} bg="red.300" p={1} borderRadius="md" display="inline-block">
          <strong>Cautions:</strong> {recipe.cautions}
        </Text>
      </Box>
    </Flex>
  );
};
