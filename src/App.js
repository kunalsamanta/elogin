import React from "react";
import { database } from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Routes, useNavigate } from "react-router-dom";

import "./App.css"

function App() {
  const history= useNavigate()



  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database,email,password).then (data=>{
      console.log(data,"authData")
      history('/home')
      

    })   

  }

  return (
    <div className="App">
      <Routes>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label >Email</label>
        <input name="email" type="email" placeholder="Enter your email"></input>
        <label>Password</label>
        <input name="password" type="password" placeholder="enter your password"></input>
        <button>Login</button>
      </form>
      </Routes>
      
    </div>
  );
}

export default App;
