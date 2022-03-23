/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transctions } = useContext(GlobalContext);
  let amounts = transctions.map((transction) => transction.amount);

  let balance = amounts.reduce(function (x, y) {
    return x + y;
  }, 0);

  return (
    <div className='balance'>
      <h2>Your Balance</h2>
      <h1>${balance}</h1>
    </div>
  );
};
