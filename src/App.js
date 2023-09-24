import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Product from './Redux/product';
import Header from './Redux/Header';
import Footer from './Redux/footer';
import SignupForm from './Signupform/Signup';
import Signupdetails from './Signupform/Signupdetails';

const App=()=>{
          
  return(
      <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Product/> }/>
        <Route path='/signup' element={<SignupForm/> }/>
        <Route path='/profile' element={ <Signupdetails/> }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     </>

  )
}

export default App;