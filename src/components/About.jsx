import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
  return (
    <Box p={5}>
      <VStack spacing={5} align="start">
        <Text fontSize="3xl" fontWeight="bold">About Rijschool</Text>
        <Text fontSize="lg">
          At Rijschool, we are dedicated to helping you become a confident and skilled driver. Our team of experienced instructors
          is passionate about teaching you the skills needed to pass your driving test and become a responsible driver on the road.
        </Text>
        <Text fontSize="lg">
          We understand that learning to drive can be stressful, but our approach is designed to make the process as enjoyable
          and stress-free as possible. We offer flexible scheduling, affordable prices, and personalized lessons that cater to your
          individual needs and pace.
        </Text>
        <Button as={Link} to="/contact" colorScheme="teal" mt={5}>
          Contact Us for More Information
        </Button>
      </VStack>
    </Box>
  );
}

export default About;
