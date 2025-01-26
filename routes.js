import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import LoginPage from './src/pages/LoginPage';

export const routesConfig = [
  { path: "/", component: Home }, // Homepage route, path should be "/"
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/login", component: LoginPage },
];
