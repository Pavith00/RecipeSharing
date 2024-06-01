import {useState} from 'react'
import {useUserContext} from '../hooks/useUserContext'

const Register = () => {
  const { dispatch } = useUserContext()  //to load data and show in web when add a new document to the database

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()  //in default when you submit the page  browser typically refreshes the entire page . prevents the default behavior of the form submission, which includes the full page reload.

    const user = { username, password, fname, lname }

    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),   //cant send workout as a object need turn into json
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
      setUsername('')
      setPassword('')
      setFname('')
      setLname('')
      dispatch({ type: 'CREATE_USER', payload: json }) //payload is json bcoz ad single doc
    }

  }
  return (
    <div>


      <div class="login">

        <div class="login-triangle"></div>

        <h2>Welcome!</h2>

        <form class="login-container" onSubmit={handleSubmit}>
          <p><input type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)} value={fname} className={emptyFields.includes('fname') ? 'error' : ''} /></p>
          <p><input type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} value={lname} className={emptyFields.includes('lname') ? 'error' : ''} /></p>

          <p><input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} className={emptyFields.includes('username') ? 'error' : ''} /></p>
          <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className={emptyFields.includes('password') ? 'error' : ''} /></p>
          <center>
            <p><input type="submit" value="Log in" /></p>
          </center>
          <div className='login-check'>
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label class="form-check-label" for="form2Example3">
              Remember me
            </label>

            <a href="#!" class="forgetPw">Forgot password?</a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register