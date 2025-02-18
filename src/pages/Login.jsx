// src/pages/LoginPage.jsx
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      Cookies.set('user', JSON.stringify(user), { expires: 7 }); // Store user for 7 days
    }
  }, [isAuthenticated, user]);

  return (
    <Center h='100vh'>
      <Box p={8} borderWidth={1} borderRadius='md' boxShadow='lg'>
        <Heading mb={6}>Log In</Heading>
        {!isAuthenticated ? (
          <Button
            onClick={() => loginWithRedirect()}
            colorScheme='teal'
            size='lg'
          >
            To be able to view this page !
          </Button>
        ) : (
          <Heading size='md'>Welcome, {user?.name}!</Heading>
        )}
      </Box>
    </Center>
  );
};

export default Login;
