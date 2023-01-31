import React, { useState } from "react";

function Item({name,category}) {
  const [isInCart,setIsInCart] = useState(false);


  function handleAddCart() {
    setIsInCart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart} className={isInCart ? "remove" : "add"}>{isInCart ? "remove" : "Add to Cart" }</button>
    </li>
  );
}

export default Item; 


