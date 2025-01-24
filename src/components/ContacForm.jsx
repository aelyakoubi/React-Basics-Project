import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Textarea, Box } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send form data to Nodemailer or your backend
    console.log('Form Submitted', formData)
    // Clear the form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">Send</Button>
      </form>
    </Box>
  );
}

export default ContactForm