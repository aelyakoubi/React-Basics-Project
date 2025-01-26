// utils/getImage.js
const getImage = (imageName) => {
  try {
    // Use dynamic imports to load images from the 'recipe-images' folder
    return new URL(`../assets/recipe-images/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.error(`Image not found: ${imageName}`);
    return ''; // Return empty or a default placeholder image URL
  }
};

export default getImage;
