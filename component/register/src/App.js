import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './home'
import RegisterForm from './registerform'
import LoginForm from './loginform'

export default function App() {

  return (
    <div className="App">
      {/* <RegisterForm/>
      <LoginForm/> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>  
        <Route path='/register' element={<RegisterForm />}/> 
        <Route path='/login' element={<LoginForm />}/>  
      </Routes>
    </div>
  );
}
