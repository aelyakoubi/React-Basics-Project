import { Center, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  // Destructuring recipe properties
  const { image, alt, label, mealType, dietLabels, dishType, cautions } = recipe;

  return (
    <Center
      gap={4}
      cursor="pointer"
      onClick={() => onClick(recipe)}
      display="flex"
      ml={4} // Adjusted left margin for better spacing
      mb={6} // Added margin-bottom for spacing between cards
      flexDirection="column" // Ensures items stack correctly
    >
      {/* Image */}
      <Image
        src={image}
        alt={alt || label} // Use recipe.alt, fallback to label if alt is missing
        w="100%" // Ensure the image takes up the full width of its container
        maxW="330px" // Limit width to 330px for responsiveness
        h="auto" // Maintain aspect ratio of the image
        objectFit="cover" // Crop or scale the image to fit
        borderRadius="lg"
        border="1px solid gray"
      />

      {/* Recipe Info */}
      <Box
        textAlign="center"
        bg="gray.100"
        p={4}
        borderRadius="lg"
        boxShadow="sm"
        mt={4}
      >
        {/* Meal Type */}
        <Text fontSize="sm" color="gray.500">
          {mealType || "No meal type"}
        </Text>

        {/* Recipe Label */}
        <Text fontSize="2xl" fontWeight="bold" mt={2}>
          {label}
        </Text>

        {/* Diet Labels */}
        <Text fontSize="sm" bg="green.200" p={1} borderRadius="md">
          {dietLabels ? dietLabels.join(", ") : "No diet labels available"}
        </Text>

        {/* Dish Type */}
        <Text fontSize="sm" mt={2}>
          Dish: {dishType || "No dish type available"}
        </Text>

        {/* Cautions */}
        <Text fontSize="sm" bg="red.200" p={1} borderRadius="md" mt={2}>
          Cautions: {cautions ? cautions.join(", ") : "No cautions available"}
        </Text>
      </Box>
    </Center>
  );
};
