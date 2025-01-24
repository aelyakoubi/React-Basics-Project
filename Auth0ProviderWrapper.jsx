import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './auth/auth0-config';

const Auth0ProviderWrapper = ({ children }) => {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: authConfig.redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWrapper;
