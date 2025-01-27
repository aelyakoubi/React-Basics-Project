import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { data } from '../utils/data.js'; // Importing data correctly

export const RecipeItem = ({ onClick }) => {
  return (
    <Box>
      {data.hits.map((hit, index) => {
        const recipe = hit.recipe; // Extract recipe object from hits
        return (
          <Flex
            key={index}
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
            {/* Image Section */}
            <Image
              src={recipe.image} // Dynamically load the image
              alt={recipe.alt || recipe.label} // Use alt if available, fallback to label
              w='100%'
              h='220px'
              objectFit='cover'
              borderBottomRadius='lg'
            />

            {/* Content Section */}
            <Box p={4} bg='white'>
              <Text fontSize='lg' fontWeight='bold' color='teal.500'>
                {recipe.label} {/* Recipe title */}
              </Text>
              <Text
                fontSize='1xl'
                fontWeight='300'
                mt={2}
                noOfLines={2}
                isTruncated
              >
                {recipe.dietLabels.join(', ')} {/* Display diet labels */}
              </Text>
              <Text
                fontSize='lg'
                mt={1}
                bg='green.300'
                p={1}
                borderRadius='md'
                display='inline-block'
              >
                {recipe.dishType || 'N/A'} {/* Dish Type */}
              </Text>
              <Text fontSize='sm' mt={2}>
                <strong>Yield:</strong> {recipe.yield || 'Unknown'} servings
              </Text>
              <Text
                fontSize='sm'
                mt={1}
                bg='red.300'
                p={1}
                borderRadius='md'
                display='inline-block'
              >
                <strong>Cautions:</strong>{' '}
                {recipe.healthLabels ? recipe.healthLabels.join(', ') : 'None'}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};
