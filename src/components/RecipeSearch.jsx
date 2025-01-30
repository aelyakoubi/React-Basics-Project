import {
  Box,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { data as availableRecipes } from '../utils/data.js';
import { RecipeItems } from './RecipeItems';

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');
  const [filter, setFilter] = useState('all'); // For category filtering

  const recipes = availableRecipes.hits;

  // Filter recipes based on category and search field
  const filteredRecipes = recipes.filter(({ recipe }) => {
    const matchesSearch =
      recipe.label.toLowerCase().includes(searchField.toLowerCase()) || '';

    // Check if the recipe matches the selected filter
    let matchesCategory = true;
    if (filter === 'vegetarian') {
      matchesCategory = recipe.healthLabels.includes('Vegetarian');
    } else if (filter === 'meat') {
      // Check if the recipe contains meat-related ingredients
      const meatIngredients = ['beef', 'chicken', 'pork', 'lamb', 'meat'];
      matchesCategory = recipe.ingredientLines.some((line) =>
        meatIngredients.some((meat) => line.toLowerCase().includes(meat))
      );
    } else if (filter === 'vegetables') {
      // Check if the recipe contains vegetable-related ingredients
      const vegetableIngredients = [
        'carrot',
        'broccoli',
        'spinach',
        'lettuce',
        'vegetable',
      ];
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
  const inputWidth = useBreakpointValue({ base: '100%', md: '180px' });
  const radioStackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box p={4}>
      {/* Search Input */}
      <Input
        placeholder='Search for recipes...'
        onChange={handleChange}
        w={inputWidth}
        border='solid'
        h={10}
        _placeholder={{ color: 'gray.400' }} // Light gray placeholder text
        mb={4} // Margin bottom for spacing
      />

      {/* Radio Buttons for Filtering */}
      <Box mt={4}>
        <RadioGroup onChange={handleFilterChange} value={filter}>
          <Stack direction={radioStackDirection} spacing={4}>
            <Radio value='all'>All Recipes</Radio>
            <Radio value='vegetarian'>Vegetarian</Radio>
            <Radio value='meat'>Meat</Radio>
            <Radio value='vegetables'>Vegetables</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      {/* Display Filtered Recipes */}
      <RecipeItems onClick={onClick} recipes={filteredRecipes} />
    </Box>
  );
};
