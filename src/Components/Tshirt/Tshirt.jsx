import React from "react";

import "./Tshirt.css";

const Tshirt = ({ tshirt, handlerAddToCart }) => {
  const { picture, name, _id, price } = tshirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name} </h4>
      <p>${price} </p>
      <button onClick={() => handlerAddToCart(tshirt)}> Buy Now</button>
    </div>
  );
};

export default Tshirt;
