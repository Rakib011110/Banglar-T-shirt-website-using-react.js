import React, { useContext } from "react";
import { RingContext } from "../GrandPa";

const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h3>Brother</h3>
      {ring}
    </div>
  );
};

export default Brother;
