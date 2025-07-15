import React from 'react';
import Pizza from './Pizza';
import pizzaData from '../data/data';

function Menu() {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. <br />
        All from our stone oven, all organic, all delicious.
      </p>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
