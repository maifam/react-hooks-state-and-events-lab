import React, { useState } from "react";

function Item({ name, category }) {

  const [added, setAdded] = useState(false)

  function handleAddClick(){
    setAdded(!added)
  }

  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddClick} className={added ? "remove" : "added"}>{added ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
