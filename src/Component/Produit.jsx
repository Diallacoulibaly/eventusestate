import React, { useState } from 'react';

function Produit({ title, price, image,nbrstate }) {
  const [card,setCard]=useState(0);
  function Addcard(){
    nbrstate();
  }
    return (
      <div className="produit">
        <img src={"./p/" + image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={Addcard}>Ajouter au panier</button>
        

      
      </div>
    );
  }
  export default Produit;