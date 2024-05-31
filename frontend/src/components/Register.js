import React from 'react'

function Register() {
  return (
    <div>
        <div class="login">
        <div class="login-triangle"></div>

        <h2 class="login-header">Log in</h2>

        <form class="login-container">
          <p><input type="email" placeholder="Email" /></p>
          <p><input type="password" placeholder="Password" /></p>

          <p><input type="submit" value="Log in" /></p>

          <div class="form-check mb-0">
            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label class="form-check-label" for="form2Example3">
              Remember me
            </label>
          </div>
          <a href="#!" class="text-body">Forgot password?</a>

        </form>
      </div>
    </div>
  )
}

export default Register