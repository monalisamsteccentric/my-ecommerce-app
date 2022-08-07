import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../Components/Features/CartSlice'
import RegisterReducer from '../Components/Features/RegisterSlice'
import SignInReducer from '../Components/Features/SignInSlice'

export const store = configureStore({
    reducer:{
        register: RegisterReducer,
        signIn: SignInReducer,
        cart: CartReducer,
    }
})