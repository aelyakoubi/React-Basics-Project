import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { data as availableRecipes } from '../utils/data.js';
import { RecipeItems } from './RecipeItems';

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');
  const [filter, setFilter] = useState('all');

  const recipes = availableRecipes.hits;

  // Filter recipes based on category and search input
  const filteredRecipes = recipes.filter(({ recipe }) => {
    const matchesSearch = recipe.label.toLowerCase().includes(searchField.toLowerCase()) || '';

    let matchesCategory = true;
    if (filter === 'vegetarian') {
      matchesCategory = recipe.healthLabels.includes('Vegetarian');
    } else if (filter === 'meat') {
      const meatIngredients = ['beef', 'chicken', 'pork', 'lamb', 'meat'];
      matchesCategory = recipe.ingredientLines.some((line) =>
        meatIngredients.some((meat) => line.toLowerCase().includes(meat))
      );
    } else if (filter === 'vegetables') {
      const vegetableIngredients = ['carrot', 'broccoli', 'spinach', 'lettuce', 'vegetable'];
      matchesCategory = recipe.ingredientLines.some((line) =>
        vegetableIngredients.some((veg) => line.toLowerCase().includes(veg))
      );
    }

    return matchesCategory && matchesSearch;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  // Responsive styles
  const inputWidth = useBreakpointValue({ base: '100%', sm: '80%', md: '50%', lg: '40%' });
  const radioStackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const containerPadding = useBreakpointValue({ base: 2, sm: 4, md: 6 });

  // Theming for Dark & Light Mode
  const bgColor = useColorModeValue('gray.50', 'gray.800'); // Light mode: Gray 50, Dark mode: Gray 800
  const textColor = useColorModeValue('black', 'white'); // Text adjusts automatically
  const inputBg = useColorModeValue('white', 'gray.700'); // Input field adapts
  const inputBorder = useColorModeValue('gray.300', 'gray.500'); // Border adapts
  const radioTextColor = useColorModeValue('black', 'white'); // Ensures visibility of radio buttons

  return (
    <Box p={containerPadding} width="100%" maxW="1200px" mx="auto" bg={bgColor} color={textColor}>
      {/* Search Input */}
      <Input
        placeholder="Search for recipes..."
        onChange={handleChange}
        w={inputWidth}
        border="solid"
        h={10}
        bg={inputBg} // Input field adapts to theme
        borderColor={inputBorder} // Border changes with theme
        _placeholder={{ color: 'gray.400' }}
        mb={4}
      />

      {/* Radio Buttons for Filtering */}
      <Box mt={4}>
        <RadioGroup onChange={handleFilterChange} value={filter}>
          <Stack direction={radioStackDirection} spacing={4}>
            <Radio value="all" colorScheme="teal">
              <Box color={radioTextColor}>All Recipes</Box>
            </Radio>
            <Radio value="vegetarian" colorScheme="teal">
              <Box color={radioTextColor}>Vegetarian</Box>
            </Radio>
            <Radio value="meat" colorScheme="teal">
              <Box color={radioTextColor}>Meat</Box>
            </Radio>
            <Radio value="vegetables" colorScheme="teal">
              <Box color={radioTextColor}>Vegetables</Box>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>

      {/* Display Filtered Recipes */}
      <RecipeItems onClick={onClick} recipes={filteredRecipes} />
    </Box>
  );
};