import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handlerAddToCart = (tshirt) => {
    // console.log(tshirt);

    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast.error(" You hav already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromeCart = (id) => {
    console.log(id);

    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            tshirt={tshirt}
            handlerAddToCart={handlerAddToCart}
            key={tshirt._id}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromeCart={handleRemoveFromeCart} cart={cart}>
          {" "}
        </Cart>
        <Toaster />
      </div>
    </div>
  );
};

export default Home;
