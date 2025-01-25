// src/auth/authConfig.js

export const authConfig = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,  // Your Auth0 domain from the .env file
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,  // Your Auth0 client ID from the .env file
  redirectUri: window.location.origin,  // Redirect URI after login
};
