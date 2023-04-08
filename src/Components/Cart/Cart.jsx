import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromeCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p> Please Add Some Products</p>;
  } else {
    message = (
      <div>
        <h5 className={cart.length === 1 ? "red" : "blue"}> Thank For Added</h5>
      </div>
    );
  }

  return (
    <div>
      <h3> Order Summary {cart.length} </h3>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        something
      </p>

      {cart.length > 2 ? (
        <span className="purple">Aro kina</span>
      ) : (
        <span>Fokira </span>
      )}
      <p> {message} </p>
      <div>
        {cart.map((tshirt) => (
          <h4 key={tshirt._id}>
            {" "}
            {tshirt.name}{" "}
            <button onClick={() => handleRemoveFromeCart(tshirt._id)}>X</button>{" "}
          </h4>
        ))}

        {cart.length === 2 && <p> Double Bannanza </p>}
        {cart.length === 3 || <p> tinta toh hoilo nah </p>}
      </div>
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 *
 * */

/**
 * CONDITIONAL CSS Class
 * 1. use ternary
 * 2. ternary inside template string
 * */
