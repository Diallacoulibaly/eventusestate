import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Produits from "./Component/Produits";
const products = [
  {
    id: 1,
    title: "PC Portable Gamer HP VICTUS",
    price: "7490 DH",
    thumbnail: "th(1).jpg",
  },
  {
    id: 2,
    title: "PC Portable Gamer HP VICTUS",
    price: "2190 DH",
    thumbnail: "th(2).jpg",
  },
  {
    id: 3,
    title: "Pc Portable Chromebook Acer",
    price: "3640 DH",
    thumbnail: "th.jpg",
  }
] 


function App(props) {
  const [card,setCard]=useState(0);
  function counter(){
    setCard(card+1);
  }
 
 return(
  <>
   <nav style={{backgroundColor:"lightgrey",marginTop:"25px",margin:"60px",padding:"2px",display:"flex",gap:"10px"}}>
    <a href='#' style={{textDecoration:"none",color:"black",marginLeft:"30px"}}>Start Bootsrap</a>
    <a href='#' style={{textDecoration:"none",color:"white"}}>Home</a>
    <a href='#' style={{textDecoration:"none",color:"white"}}>About</a>
    <a href='#' style={{textDecoration:"none",color:"white"}}>Shop</a>
    <span style={{marginLeft:"680px"}}>card:{card}</span>


  </nav>
  <div style={{backgroundColor:"black",padding:"50px",textAlign:"center",margin:"60px",marginTop:"-60px"}}>    
    <h1 style={{color:"white"}}>Shop in style</h1>
    <p style={{color:"grey"}}>with this shop hompeage template</p>
    </div>
    <div className=''>
      <Produits list={products} nbrstate={counter}/>
      
      
    
  
    </div>
    <div style={{backgroundColor:"black",padding:"20px",textAlign:"center",margin:"50px"}}>
      <p style={{color:"whitesmoke"}}>Copyright your website 2022</p>
    </div>
    

    
  </>
  
 )
}

export default App;
