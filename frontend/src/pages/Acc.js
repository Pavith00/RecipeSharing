import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

function Acc() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false); // Ensure register is hidden
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false); // Ensure login is hidden
  };

  return (
    <div className='Acc'>
      <div className='Acc-box'>
        <div className='login-container'>
          <div className='btn-grp'>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary select-btn-lg" onClick={handleLoginClick}>Login</button>
            <button type="button" class="btn btn-secondary select-btn-reg" onClick={handleRegisterClick}>Register</button>
          </div>
          </div>

          {showLogin && <Login />}
          {showRegister && <Register />}
        </div>
      </div>
    </div>
  );
}

export default Acc;