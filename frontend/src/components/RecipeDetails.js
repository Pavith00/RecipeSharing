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

      <table className='table-recipe'>
        <tr>
          <th className='table-img-cl'><h1>{recipe.name}</h1></th>
          <th><h3>Details</h3></th>
          <th><h3>Ingredients</h3></th>
        </tr>
        <tr>
          <td className='table-img-cl'><p>{recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} style={{ width: '100%' }} />}</p></td>
          <td>
            <p><strong>dishType: </strong><br />{recipe.dishType}</p>
            <p><strong>cookingTime: </strong><br />{recipe.cookingTime}</p>
            <p><strong>noOfServings: </strong><br />{recipe.noOfServings}</p>
          </td>
          <td>
            {recipe.ingredients}
          </td>
        </tr>
      </table>

      <hr />

      <table className='table-recipe'>
        <tr>
          <th><h3>instructions</h3></th>
        </tr>
        <tr>
          <td>{recipe.instructions}</td>
        </tr>

      </table>
      
      <hr/>
      <h3>Credits</h3>
      <p><strong>userName: </strong><br />{recipe.userName}</p>
      <p><strong>email: </strong><br />{recipe.email}</p>
      <p><strong>Uploaded: </strong><br />{formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}</p>
    </div>
  );
};

export default RecipeDetails;
