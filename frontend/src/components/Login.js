import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send login credentials to the backend
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                // Redirect to account page on successful login
                navigate('/nn');
            } else {
                // Display error message on failed login
                const data = await response.json();
                setError(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="login">
                <div className="login-triangle"></div>
                <h2>Hello!</h2>
                <form className="login-container" onSubmit={handleSubmit}>
                    <p><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></p>
                    <p><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
                    <center>
                        <p><input type="submit" value="Log in" /></p>
                    </center>
                </form>
                {error && <div className="error">{error}</div>}
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

export default Login;
