import React, { useContext } from "react";
import Friend from "../Friend/Friend";
import { MoneyContext } from "../GrandPa";

const Cousin = ({ children }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Cousin</h3>
      <p>
        {" "}
        <small> Grandpa Money {money} </small>{" "}
      </p>
      <p>
        <small> {children} </small>
        <button onClick={() => setMoney(money + 100)}> send 100tk </button>
        <Friend></Friend>
      </p>
    </div>
  );
};

export default Cousin;
