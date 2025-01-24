import { Box, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service and template IDs (replace with your own)
    const serviceID = 'your_service_id';  // Replace with your EmailJS service ID
    const templateID = 'your_template_id';  // Replace with your template ID
    const userID = 'your_user_id';  // Replace with your EmailJS User ID

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
    <Box p={5}>
      <Text fontSize="3xl" mb={5}>Contact Us</Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
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
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal">Send Message</Button>
      </form>
    </Box>
  );
};

export default Contact;
