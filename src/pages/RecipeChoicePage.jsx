import { useLocation } from 'react-router-dom';
import RecipeChoice from '../components/RecipeChoice';

const RecipeChoicePage = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return <p>No recipe selected</p>;
  }

  return <RecipeChoice recipe={recipe} />;
};

export default RecipeChoicePage;
