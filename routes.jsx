import { Route, Routes } from 'react-router-dom'; // Correct import for react-router-dom
import ProtectedRoute from './src/components/ProtectedRoute'; // Corrected path for ProtectedRoute
import About from './src/pages/About'; // Corrected path for About
import Contact from './src/pages/Contact'; // Corrected path for Contact
import LoginPage from './src/pages/LoginPage'; // Corrected path for LoginPage
import Privacy from './src/pages/Privacy'; // Corrected path for Privacy
import RecipeChoicePage from './src/pages/RecipeChoicePage'; // Corrected path for RecipeChoicePage
import RecipesPage from './src/pages/RecipesPage'; // Corrected path for RecipesPage
import Terms from './src/pages/Terms'; // Corrected path for Terms

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<RecipesPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/privacy' element={<Privacy />} />

      {/* Protected routes */}
      <Route
        path='/contact'
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path='/recipe-choice-page'
        element={
          <ProtectedRoute>
            <RecipeChoicePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;
