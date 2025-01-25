import { Center, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <Center
      flexDirection="column"
      gap={4}
      cursor="pointer"
      onClick={() => onClick(recipe)}
      w={["90%", "45%", "30%"]} // Adjust width for responsiveness
      mx="auto" // Centers the content
      mb={6} // Add margin bottom to space out items
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        w="100%" // Ensure image takes full width of its container
        h="auto" // Maintain aspect ratio
        objectFit="cover" // Crop or scale image to fit nicely
        borderRadius="lg"
        border="1px solid gray"
      />
      <Box
        lineHeight={1.9}
        textAlign="center"
        bg="gray.100"
        p={4}
        borderRadius="lg"
        boxShadow="md"
      >
        <Text fontSize="lg" fontWeight="bold">
          {recipe.label}
        </Text>
        <Text fontSize="sm" color="green.500">
          {recipe.dietLabels.join(", ")}
        </Text>
        <Text fontSize="sm" color="red.500">
          Cautions: {recipe.cautions.join(", ")}
        </Text>
        <Text fontSize="sm">Dish: {recipe.dishType}</Text>
      </Box>
    </Center>
  );
};
