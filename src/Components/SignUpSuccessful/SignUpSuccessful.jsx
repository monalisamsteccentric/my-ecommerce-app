import React from 'react'
import './SignUpSuccesful.css'
import {useNavigate} from 'react-router-dom'

const SignUpSuccessful = () => {
  const navigate = useNavigate()
  return (
    <div className="backgroudPage">
        <div className="textBox">
            <h1>Sign Up Succesful..Please click below to Sign In</h1>
            <button onClick={()=>navigate('/signin')} className="btn">Sign In</button>
        </div>
    </div>
  )
}

export default SignUpSuccessful