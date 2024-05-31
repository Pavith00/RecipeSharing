import React from 'react'

function Login() {
  return (
    <div>

      <div class="login">
        <div class="login-triangle"></div>

        <h2>Log in</h2>

        <form class="login-container">
          <p><input type="username" placeholder="username" /></p>
          <p><input type="password" placeholder="Password" /></p>
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

export default Login