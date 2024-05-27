import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()  //to load data and show in web when add a new document to the database

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()  //in default when you submit the page  browser typically refreshes the entire page . prevents the default behavior of the form submission, which includes the full page reload.

    const workout = {title, load, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),   //cant send workout as a object need turn into json
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
      setTitle('')
      setLoad('')
      setReps('')
      dispatch({type: 'CREATE_WORKOUT', payload: json}) //payload is json bcoz ad single doc
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}  
    </form>
  )
}

export default WorkoutForm

//form to add workouts

/*output the error
{error && <div className="error">{error}</div>}  
*/