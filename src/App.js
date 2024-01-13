import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
const [nom,setNom]=useState();
const [prenom,setPrenom]=useState();
const [info,setInfo]=useState();


  
  return(
    <div>
      <h1>Bienvenu sur notre page d'accueil</h1>
      <form >
        <label>veuillez saisir votre nom:</label>
        <input type='text' onChange={(e)=>{setNom(e.target.value.toUpperCase())}}/>
        <br/>
        <label>veuillez saisir votre prenom:</label>
        <input type='text' onChange={(e)=>{setPrenom(e.target.value.toUpperCase())}}/>
      </form>
     <button onClick={emp=>{setInfo(`nom:${nom} prenom:${prenom}`)}}>click</button>
     <p>{info}</p>
    </div>
  )
  
}

export default App;
