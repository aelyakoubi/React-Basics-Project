// src/components/LogoutButton.jsx
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    // Remove the user cookie before logging out
    Cookies.remove('user');

    // Perform Auth0 logout and redirect to '/'
    logout({ returnTo: window.location.origin + '/' });
  };

  // Render the button only if the user is authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button mt={4} colorScheme='red' onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
