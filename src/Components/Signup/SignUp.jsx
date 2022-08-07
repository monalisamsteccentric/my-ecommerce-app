import './Signup.css'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToStorage } from '../Features/RegisterSlice'

 


const SignUp = () => {
  const [formDetails, setFormDetails] = useState({
    username: '',
    email:'',
    password:'',
  })
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) =>{
      const {name, value} = e.target
      setFormDetails({...formDetails, [name]:value})
  }
  const validate = (details) =>{
    const errors = {}
    if(!details.username){
      errors.username = "Username can't be empty"
    }
    if(!details.email){
      errors.email = "Email can't be empty"
    }
    if(!details.password){
      errors.password = "Password can't be empty"
    }
    return errors
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setErrors(validate(formDetails))
    if(Object.keys(errors).length===0){
      setIsSignedIn(true)
    }
    dispatch(addToStorage(formDetails))
    
  }  
  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSignedIn === true){
       navigate('/signupsuccessful')
    }
  },[errors,isSignedIn,navigate])
  return (
    <div className="centerbox">
    
          <form onSubmit={handleSubmit}>
          <div className="formbox">
          <input className='input' value={formDetails.username} onChange={handleChange} type="text" name='username' placeholder='Enter Username'/>
          <span>{errors.username}</span>
          <input className='input' value={formDetails.email} onChange={handleChange} type="email" name='email' placeholder='Enter email'/>
          <span>{errors.email}</span>
          <input className='input' value={formDetails.password} onChange={handleChange} type="password" name='password' placeholder='Enter password'/>
          <span>{errors.password}</span>
           <button className='btn' type='submit'>Sign Up</button>
          </div>
      </form>
        
    </div>
  )
}

export default SignUp