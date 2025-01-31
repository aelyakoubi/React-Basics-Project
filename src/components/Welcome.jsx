import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Welcome = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated); // Track the login state
  }, [isAuthenticated]); // Only re-run when isAuthenticated changes

  return (
    <Box p={8} textAlign='center'>
      {isLoggedIn && user ? (
        <Heading size='lg'>Welcome back, {user.email}!</Heading>
      ) : (
        <>
          <Heading size='lg'>Please log in</Heading>
          <Button mt={4} colorScheme='teal' onClick={() => loginWithRedirect()}>
            Log In Secured with Auth0
          </Button>
        </>
      )}
    </Box>
  );
};

export default Welcome;
