import { useAuth0 } from '@auth0/auth0-react';
import { Center, Spinner } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Center minH='100vh'>
        <Spinner size='xl' />
      </Center>
    ); // Show a spinner while Auth0 is still loading
  }

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
