import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div>
            <div className="login">
                <div className="login-triangle"></div>
                <h2>Wellcome!</h2>
                <form className="login-container" onSubmit={handleSubmit}>
                    <p><input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /></p>
                    <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /></p>

                    <button disabled={isLoading}>Sign in</button>
                    {error && <div className="error">{error}</div>}
                </form>
                
                <div className='login-check'>
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    <a href="#!" className="forgetPw">Forgot password?</a>
                </div>
            </div>
        </div>
    );
}



export default Register;