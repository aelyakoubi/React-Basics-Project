// src/pages/LoginPage.jsx
import { Button, Center, Heading, Box } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Center h="100vh">
      <Box p={8} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Heading mb={6}>Log In</Heading>
        <Button onClick={() => loginWithRedirect()} colorScheme="teal" size="lg">
          Log In with Auth0
        </Button>
      </Box>
    </Center>
  );
}

export default LoginPage;
