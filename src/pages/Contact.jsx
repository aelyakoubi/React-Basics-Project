// src/pages/Contact.jsx
import { Box, Text, FormControl, FormLabel, Input, Textarea, Button, Container, Center, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton'; 

const Contact = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0(); // Auth0 hook
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

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

    setFormData({ name: '', email: '', message: '' });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box as="header" bg="teal.500" p={5} boxShadow="md">
        <Text color="white" fontSize="xl" fontWeight="bold">Max Recipe Checker</Text>
      </Box>

      <Center flex="1" bg="gray.50" py={8}>
        {isAuthenticated ? (
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

            <LogoutButton /> {/* Use the LogoutButton component here */}
          </Container>
        ) : (
          <Text fontSize="lg">Please log in to contact us!</Text>
        )}
      </Center>

      <Box as="footer" bg="teal.500" p={5} boxShadow="md" mt={5}>
        <Text color="white" textAlign="center">© {new Date().getFullYear()} Max Recipe Checker. All rights reserved.</Text>
      </Box>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Required</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You must log in or register before you can send a message.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleLogin}>Log In</Button>
            <Button variant="ghost" onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
