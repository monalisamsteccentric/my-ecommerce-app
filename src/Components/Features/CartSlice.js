import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const getProductItems = createAsyncThunk('cart/getProductItems', ()=>{
    return fetch('https://fakestoreapi.com/Products')
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
})

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems: [],
        actualCartItems: [],
        numberOfItems: 0,
        totalAmount: 0,
        isloading: false,
    },
    reducers:{
        addToCart : (state, action) =>{
            const itemID = state.actualCartItems.findIndex((item)=>{
                return(item.id === action.payload.id)
            })
            if(itemID>=0){
                state.actualCartItems[itemID].cartAmount += 1
            }else{
                const temp = {...action.payload, cartAmount: 1}
                state.actualCartItems.push(temp)
            }
            let num = state.actualCartItems.reduce((total, item)=>{
                return total + item.cartAmount
            },0)
            
            state.numberOfItems = num

            let amount = state.actualCartItems.reduce((total, item)=>{
                return total + (item.cartAmount * item.price)
            },0)

            state.totalAmount = amount
        },
        increaseNumber: (state,action) =>{
            
            const index = state.actualCartItems.findIndex((item)=>item.id === action.payload.id)

            state.actualCartItems[index].cartAmount +=1

            let num = state.actualCartItems.reduce((total, item)=>{
                return total + item.cartAmount
            },0)
            
            state.numberOfItems = num

            let amount = state.actualCartItems.reduce((total, item)=>{
                return total + (item.cartAmount * item.price)
            },0)

            state.totalAmount = amount

        },
        
        
        decreaseNumber: (state,action) =>{

            
          
            const index = state.actualCartItems.findIndex((item)=>item.id === action.payload.id)
            if(state.actualCartItems[index].cartAmount === 1){
                const items = state.actualCartItems.filter((item)=>{
                    return item.id !== action.payload.id
                 })
                 state.actualCartItems = items
                    
            }else{
                state.actualCartItems[index].cartAmount -=1
            }

            
         
            let num = state.actualCartItems.reduce((total, item)=>{
                return total + item.cartAmount
            },0)
            
            state.numberOfItems = num

            let amount = state.actualCartItems.reduce((total, item)=>{
                return total + (item.cartAmount * item.price)
            },0)

            state.totalAmount = amount
          },
          removeItem: (state, action) =>{
             
             
             const items = state.actualCartItems.filter((item)=>{
                return item.id !== action.payload.id
             })
             state.actualCartItems = items
                        let num = state.actualCartItems.reduce((total, item)=>{
                return total + item.cartAmount
            },0)
            
            state.numberOfItems = num

            let amount = state.actualCartItems.reduce((total, item)=>{
                return total + (item.cartAmount * item.price)
            },0)

            state.totalAmount = amount


          }, 
},
    extraReducers:{
        [getProductItems.pending] : (state) => {
           state.isloading = true
        },
        [getProductItems.fulfilled] : (state, {payload}) => {
            state.isloading = false
            state.cartItems = payload
        },
        [getProductItems.rejected] : (state) =>{
            state.isloading = false
        }
    }
})

export const {addToCart, increaseNumber, decreaseNumber, removeItem} = CartSlice.actions

export default CartSlice.reducer