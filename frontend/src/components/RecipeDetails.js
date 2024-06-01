import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const json = await response.json();
        setRecipe(json);
      } catch (error) {
        console.error('Error fetching recipe:', error.message);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      <h3>{recipe.name}</h3>
      <p><strong>dishType: </strong><br/>{recipe.dishType}</p>
      <p><strong>ingredients: </strong><br/>{recipe.ingredients}</p>
      <p><strong>instructions: </strong><br/>{recipe.instructions}</p>
      <p>{recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}</p>
      <p><strong>cookingTime: </strong><br/>{recipe.cookingTime}</p>
      <p><strong>noOfServings: </strong><br/>{recipe.noOfServings}</p>
      <p><strong>userName: </strong><br/>{recipe.userName}</p>
      <p><strong>email: </strong><br/>{recipe.email}</p>
      <p>{formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}</p>
    </div>
  );
};

export default RecipeDetails;
