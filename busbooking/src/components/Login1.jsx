import React from 'react'
import './Login1.css'
import {Link} from 'react-router-dom'
const Login1 = () => {
    
  return (
    <div className='containers'>
      <div classsName="header" id="header">
        <div className="text" id="text">Login</div>
        {/* <div classname="underline" id="underline"></div> */}
      </div>
      <div classname='inputs' id="inputs">
        <div className="input">
          <img src="person.png" alt=""></img>
          <input type="text" placeholder='Enter Your Name'></input>
        </div>
        <div className="input">
          <img src="password.png" alt=""></img>
          <input type="password" placeholder='Enter Your Password'></input>
        </div>
      </div>
      <div className="submitcontainer1" id="submit-container1">
      <div className="submit1" id="submit1">Login</div>
      </div>
      <div className="submitcontainer2" id="submit-container2">
      <div className="forgot-password">Don't have an account? <span><Link to="/LoginSignup" className="signup">Sign Up!</Link></span></div>
    </div>
      
    </div>
  )
}

export default Login1;