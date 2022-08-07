

import SignUp from './Components/Signup/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import SignUpSuccessful from './Components/SignUpSuccessful/SignUpSuccessful';
import Page from './Pages/Page';
import SignIn from './Components/SignIn/SignIn';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getProductItems } from './Components/Features/CartSlice';
import CartPage from './Components/CartPage/CartPage';
function App() {
 const dispatch = useDispatch()

 useEffect(()=>{
    dispatch(getProductItems())
 },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signupsuccessful" element={<SignUpSuccessful/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/" element={<Page/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
