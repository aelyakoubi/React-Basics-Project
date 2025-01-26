// src/components/LogoutButton.jsx
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    navigate('/'); // Redirect to the homepage after logout
  };

  // Render button only if the user is authenticated, so you do NOT see the button when the user is not logged in
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button mt={4} colorScheme="red" onClick={handleLogout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
