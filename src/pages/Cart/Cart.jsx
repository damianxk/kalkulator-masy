import React, { useState } from "react";
import Header from '../../components/Header/Header';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
    <Header />
      <div>
        <h2>Koszyk</h2>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={() => addToCart("Przykładowy przedmiot")}>
          Dodaj do koszyka
        </button>
      </div>
    </>
  );
};

export default Cart;
