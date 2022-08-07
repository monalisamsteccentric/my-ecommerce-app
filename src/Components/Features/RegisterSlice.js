import {createSlice} from '@reduxjs/toolkit'

const RegisterSlice = createSlice({
    name:'register',
    initialState:{
        formDetails: localStorage.getItem('formdetails') ? 
        JSON.parse(localStorage.getItem('formdetails')): []
    },
    reducers:{addToStorage: (state,action) =>{
        const details = {user: action.payload.username, pass: action.payload.password }
        state.formDetails.push(details)

        localStorage.setItem('formdetails',JSON.stringify(state.formDetails))
    }
}
})


export default RegisterSlice.reducer

export const {addToStorage} = RegisterSlice.actions