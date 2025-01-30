import { Box, Text, VStack, Button, Center, Heading, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const About = () => {
  // Dynamic colors for Dark & Light Mode
  const bgColor = useColorModeValue('white', 'black');
  const textColor = useColorModeValue('black', 'white');
  const headingColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <Box p={5} bg={bgColor} color={textColor} minHeight="100vh">
      <Center h="100vh" flexDirection="column">
        <Heading size="2xl" mb={5} color={headingColor}>
          Recipe Checker
        </Heading>
        <VStack spacing={5} align="center">
          <Text fontSize="xl" textAlign="center">
            Welcome to our Recipe Checker! Here, you can easily check and manage your recipes. Whether you are a novice cook
            or an experienced chef, we help you ensure your ingredients and instructions are spot on.
          </Text>
          <Text fontSize="lg" textAlign="center">
            Simply enter your recipe details, and we will verify your ingredients, offer helpful cooking tips, and provide
            nutritional information to make your cooking experience smoother and more enjoyable.
          </Text>
          <Button as={Link} to="/" colorScheme="teal" size="lg" mt={5}>
            Start Checking Your Recipe
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default About;