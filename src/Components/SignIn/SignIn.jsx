import React, { useEffect } from 'react'
import { useState } from 'react'
import './Signin.css'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToStore } from '../Features/SignInSlice'


const SignIn = () => {
  const [formDetails, setFormDetails] = useState({
    username:'',
    password:''
  }) 
  const dispatch = useDispatch()
  const navigate = useNavigate() 
  const [bool, setBool] = useState(false)
  const userarray = useSelector(state=>state.register.formDetails)
  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormDetails({...formDetails, [name]: value})
  }
  const handleSubmit = (e) =>{
       e.preventDefault()
     const func = (array) =>{
         for(let i=0;i<array.length;i++){
            if(formDetails.username === array[i].user && 
                formDetails.password ===  array[i].pass){
                  dispatch(addToStore(formDetails.username))
                
                return true
                }
         }
     }
    setBool(func(userarray))
  }
  useEffect(()=>{
     if(bool){
      navigate('/')
     }
  },[bool])
  return (
    <div className="centerbox">
    
          <form onSubmit={handleSubmit}>
          <div className="formbox">
          <input className='input' value={formDetails.username} onChange={handleChange} type="text" name='username' placeholder='Enter Username'/>
          
          
          <input className='input' value={formDetails.password} onChange={handleChange} type="password" name='password' placeholder='Enter password'/>
          
           <button className='btn' type='submit'>Sign In</button>
          </div>
      </form>
        
    </div>
  )
}

export default SignIn