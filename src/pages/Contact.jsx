import { Box, Text, FormControl, FormLabel, Input, Textarea, Button, Container, Center, Heading } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    // Send the email using emailjs
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending message.');
        }
      );

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Box as="header" bg="teal.500" p={5} boxShadow="md">
        <Text color="white" fontSize="xl" fontWeight="bold">Max Recipe Checker</Text>
      </Box>

      {/* Centering Form */}
      <Center flex="1" bg="gray.50" py={8}>
        <Container maxW="lg" bg="white" p={8} boxShadow="md" borderRadius="md">
          <Heading as="h2" size="lg" mb={6} textAlign="center">Contact Us</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                isRequired
              />
            </FormControl>

            <FormControl isRequired mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                isRequired
              />
            </FormControl>

            <FormControl isRequired mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                isRequired
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full">Send Message</Button>
          </form>
        </Container>
      </Center>

      {/* Footer */}
      <Box as="footer" bg="teal.500" p={5} boxShadow="md" mt={5}>
        <Text color="white" textAlign="center">© {new Date().getFullYear()} Max Recipe Checker. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Contact;
