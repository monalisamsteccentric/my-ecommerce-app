import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart } from '../Features/CartSlice'
import './Home.css'

const Home = () => {
    const items = useSelector(state=>state.cart.cartItems)
    const dispatch = useDispatch()
    const isloading = useSelector(state=>state.cart.isloading)
    const handleClick = (item) =>{
        dispatch(addToCart(item))
        window.alert('Item has been added to the cart')
        
    }
  return (
    <div className="conatiner">
        {
           isloading ? <h1>Loading...</h1> : items.map((item)=>{
                return(
                    <div key={item.id} className="card">
                        <div className="imagebox">
                        <img src={item.image} alt="" />
                        </div>
                        
                         <p className='title'>{item.title}</p>
                         <p className='price'>${item.price}</p>
                         <button onClick={()=>handleClick(item)}className="btn">Add to Cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home