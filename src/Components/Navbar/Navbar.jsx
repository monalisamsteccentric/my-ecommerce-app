import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'


const Navbar = () => {
  const navigate = useNavigate()
  const username = useSelector(state=> state.signIn.username)
  const cartItems = useSelector(state=> state.cart.numberOfItems)
  const [isSignIn , setIsSignin] = useState(false)
  
  const handleClick = () =>{
    setIsSignin(false)
    navigate('/')
  }
    
  useEffect(()=>{
    username ? setIsSignin(true) : setIsSignin(false)
  },[username])
  return (
    <div className="navbar">
        <div className="logo">
            <h3 onClick={handleClick}>FakeStore</h3>
        </div>
        <div className="ul-items">
            <ul>
              <li>
                {
                  isSignIn ? <button onClick={()=>navigate('/cartpage')} className='btn'> cart 
                  <span style={{marginLeft: '3px', color:'yellow'}}>{cartItems}</span></button> : null
                }
              </li>
                <li>{
                  isSignIn ? `Welcome ${username[username.length-1]}` : <p onClick={()=>navigate('/signin')}> Sign In </p>
                  }</li>
                <li > {
                  isSignIn ? '' : <p onClick={()=>navigate('/signUp')}> Sign Up</p>
                }
                </li>
                <li>{isSignIn ? <p onClick={()=>setIsSignin(false)}>Sign out</p> : '' }</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar