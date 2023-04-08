import React, { createContext, useState } from "react";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";
import Anty from "./Anty/Anty";
import "./Grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h3> Grandpa</h3>
      <p> Has Money: {money} </p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Anty></Anty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
/**
 * 1. create context and export
 * 2. Create a provider and pass a value
 * 3. use useContext to receive
 * */
