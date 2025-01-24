import { Box, Text, VStack, Button, Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../index.css";

const About = () => {
  return (
    <Box p={5}>
      <Center h="100vh" flexDirection="column">
        <Heading size="2xl" mb={5} color="blue.200">
          About Rijschool
        </Heading>
        <VStack spacing={5} align="center">
          <Text fontSize="xl" textAlign="center">
            At Rijschool, we are dedicated to helping you become a confident and skilled driver. Our team of experienced instructors
            is passionate about teaching you the skills needed to pass your driving test and become a responsible driver on the road.
          </Text>
          <Text fontSize="lg" textAlign="center">
            We understand that learning to drive can be stressful, but our approach is designed to make the process as enjoyable
            and stress-free as possible. We offer flexible scheduling, affordable prices, and personalized lessons that cater to your
            individual needs and pace.
          </Text>
          <Button as={Link} to="/contact" colorScheme="teal" size="lg" mt={5}>
            Contact Us for More Information
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default About;
