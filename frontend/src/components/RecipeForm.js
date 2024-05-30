import { useState } from 'react'
import { useRecipesContext } from '../hooks/useRecipesContext'

const RecipeForm = () => {
  const { dispatch } = useRecipesContext()  //to load data and show in web when add a new document to the database

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()  //in default when you submit the page  browser typically refreshes the entire page . prevents the default behavior of the form submission, which includes the full page reload.

    const recipe = {name, ingredients, imageUrl}
    
    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: JSON.stringify(recipe),   //cant send workout as a object need turn into json
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()  //store the reponse in constant that define in post controller

    if (!response.ok) {
      setError(json.error)   //create a state as seterror.json.error=error message or information returned by the server in the JSON response body (post)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setName('')
      setImageUrl('')
      setIngredients('')
      dispatch({type: 'CREATE_RECIPE', payload: json}) //payload is json bcoz ad single doc
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Recipe</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="text" 
        onChange={(e) => setIngredients(e.target.value)} 
        value={ingredients}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="text" 
        onChange={(e) => setImageUrl(e.target.value)} 
        value={imageUrl}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Recipe</button>
      {error && <div className="error">{error}</div>}  
    </form>
  )
}

export default RecipeForm

//form to add workouts

/*output the error
{error && <div className="error">{error}</div>}  
*/