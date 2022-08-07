import {createSlice} from '@reduxjs/toolkit'

const SignInSlice = createSlice({
    name:'signIn',
    initialState:{
        username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : []
    },
    reducers:{addToStore: (state,action) =>{
        const dets = action.payload
        state.username.push(dets)

        localStorage.setItem('username',JSON.stringify(state.username))

        
    }
}
})

export default SignInSlice.reducer

export const {addToStore} = SignInSlice.actions