/** @format */

import React, { useContext } from "react";
import "./History.css";
import { GlobalContext } from "../Context/GlobalState";
import { TransctioList } from "./TransctioList";

export const History = () => {
  const { transctions } = useContext(GlobalContext);

  // let total = transctions.amount.reduce(function (x, y) {
  //   return x + y;
  // }, 0);
  // console.log(total);

  return (
    <div className='history'>
      <h3>History</h3>
      <ul className='lists'>
        {transctions.map((transction) => (
          <TransctioList key={transction.id} transction={transction} />
        ))}
      </ul>
    </div>
  );
};
