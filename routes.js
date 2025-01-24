// routes.js
import Home from './pages/Home';
import About from './pages/About';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage'; // Ensure LoginPage exists

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/About", component: <About /> },
  { path: "/Prices", component: <Prices /> },
  { path: "/Contact", component: <Contact /> },
  { path: "/Dashboard", component: <Dashboard /> },
  { path: "/Login", component: <LoginPage /> },
];
