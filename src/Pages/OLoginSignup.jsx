import React from 'react'
import './css/OLoginSignup.css'
const OLoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email"  placeholder='Email Adress'/>
          <input type="password" placeholder='Password' />
        </div>
        <button id='loginbtn'>Continue</button>
        <div className="loginsignup-login">Already have an account?<span>login here</span></div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continue. i agree to the terms of use & privacy policy.</p>
          
        </div>
      </div>
    </div>
  )
}

export default OLoginSignup
