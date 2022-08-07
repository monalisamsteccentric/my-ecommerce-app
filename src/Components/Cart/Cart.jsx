import {useSelector, useDispatch} from 'react-redux'
import { decreaseNumber, increaseNumber, removeItem } from '../Features/CartSlice'

const Cart = () =>{
    const cartItems = useSelector(state=> state.cart.actualCartItems)
    const amount = useSelector(state=> state.cart.totalAmount)
    const dispatch = useDispatch()


    return(
       <div>
        {
            amount === 0 ? <>
              
              <h1> Your Cart is Empty</h1>

            </> :
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            {
                 cartItems.map((cartItem)=>{
                    return(
                        <div key={cartItem.id} style={{display:'flex', 
                        alignItems: 'center', flexWrap:'wrap', margin:'3rem', width:'60%'}}>
                            <img src={cartItem.image} alt={cartItem.title} 
                            style={{marginLeft: '0', height:'6rem', width:'6rem'}}/>
                            <div style={{display:'flex', flexDirection:'column', marginLeft:'3rem', width:'60%'}}>
                                <p style={{textAlign:'left'}}>{cartItem.title}</p>
                                <p style={{textAlign:'left'}}>${cartItem.price}</p>
                                <div style={{textAlign:'left'}} >
                                    <button style={{backgroundColor:'white',
                                border:'1px solid pink'}}
                                onClick={()=>dispatch(increaseNumber(cartItem))}>+</button>
                                     <span style={{padding: '1rem',color:'black'}}>{cartItem.cartAmount}</span>
                                    <button style={{backgroundColor:'white',
                                border:'1px solid pink'}}
                                onClick={()=>dispatch(decreaseNumber(cartItem))}>-</button>
                                </div>
                                <button style={{textAlign:'center', margin:'2rem 0'
                            ,backgroundColor:'white',
                            border:'1px solid pink'}}
                            onClick={()=>dispatch(removeItem(cartItem))}>Delete Item</button>
                            </div>
    
                            
                        </div>
                    )
                 })
            }
            
            <div style={{textAlign:'right'}}>
                <hr />
                <h4>Total : ${amount.toFixed(2)}</h4>
            </div>
           </div>
        }
       </div>
    )
}

export default Cart