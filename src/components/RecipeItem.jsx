import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const RecipeItem = ({ recipe, onClick }) => {
  // Dynamically resolve the image path
  const imageUrl = new URL(
    `/src/assets/recipe-images/${recipe.image}`,
    import.meta.url
  ).href;

  return (
    <Flex
      direction='column'
      w='330px'
      h='auto'
      cursor='pointer'
      onClick={() => onClick(recipe)}
      borderWidth={3}
      borderRadius='2xl'
      overflow='hidden'
      boxShadow='md'
      transition='transform 0.3s ease'
      _hover={{ transform: 'scale(1.05)' }}
      mb={8}
    >
      <Image
        src={recipe.image}
        alt={recipe.url}
        w='100%'
        h='220px'
        objectFit='cover'
        borderBottomRadius='lg'
      />
      <Box p={4} bg='white'>
        <Text fontSize='lg' fontWeight='bold' color='teal.500'>
          {recipe.mealType}
        </Text>
        <Text fontSize='1xl' fontWeight='300' mt={2} noOfLines={2} isTruncated>
          {recipe.label}
        </Text>
        <Text
          fontSize='lg'
          mt={1}
          bg='green.300'
          p={1}
          borderRadius='md'
          display='inline-block'
        >
          {recipe.dietLabels}
        </Text>
        <Text fontSize='sm' mt={2}>
          <strong>Dish:</strong> {recipe.dishType}
        </Text>
        <Text
          fontSize='sm'
          mt={1}
          bg='red.300'
          p={1}
          borderRadius='md'
          display='inline-block'
        >
          <strong>Cautions:</strong> {recipe.cautions}
        </Text>
      </Box>
    </Flex>
  );
};
