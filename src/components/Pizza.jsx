import React from "react";

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;

  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt={`Image of ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
      </div>
    </li>
  );
}

export default Pizza;
