import { useState } from 'react'
import { useRecipesContext } from '../hooks/useRecipesContext'

const RecipeForm = () => {
  const { dispatch } = useRecipesContext()  //to load data and show in web when add a new document to the database

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [dishType, setDishType] = useState('')
  const [noOfServings, setNoOfServings] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()  //in default when you submit the page  browser typically refreshes the entire page . prevents the default behavior of the form submission, which includes the full page reload.

    const recipe = {  name, ingredients, instructions, imageUrl, cookingTime, dishType, noOfServings, userName, email }

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
      setCookingTime('')
      setDishType('')
      setEmail('')
      setInstructions('')
      setNoOfServings('')
      setUserName('')
      dispatch({ type: 'CREATE_RECIPE', payload: json }) //payload is json bcoz ad single doc
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Recipe</h3>

      <label>Recipe Title:</label>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} className={emptyFields.includes('name') ? 'error' : ''} />

      <label>Dish Type:</label>
      <select onChange={(e) => setDishType(e.target.value)} value={dishType} className={emptyFields.includes('dishType') ? 'error' : ''}>
        <option value="">Select Dish Type</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Course">Main Course</option>
        <option value="Dessert">Dessert</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Salad">Salad</option>
        {/* Add more options as needed */}
      </select>

      <label>No Of Servings:</label>
      <input type="text" onChange={(e) => setNoOfServings(e.target.value)} value={noOfServings} className={emptyFields.includes('noOfServings') ? 'error' : ''} />

      <label>cookingTime:</label>
      <input type="text" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} className={emptyFields.includes('cookingTime') ? 'error' : ''} />

      <label>Ingredients with measurement:</label>
      <textarea type="text" onChange={(e) => setIngredients(e.target.value)} value={ingredients} className={emptyFields.includes('ingredients') ? 'error' : ''} />

      <label>Instructions:</label>
      <textarea type="text" onChange={(e) => setInstructions(e.target.value)} value={instructions} className={emptyFields.includes('instructions') ? 'error' : ''} />

      <label>imageUrl:</label>
      <input type="text" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} className={emptyFields.includes('imageUrl') ? 'error' : ''} />

      <label>Your Name:</label>
      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} className={emptyFields.includes('userName') ? 'error' : ''} />

      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className={emptyFields.includes('email') ? 'error' : ''} /><br/><br/>

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