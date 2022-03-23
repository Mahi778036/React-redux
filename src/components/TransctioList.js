/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./History.css";

export const TransctioList = ({ transction }) => {
  const sign = transction.amount > 0 ? "+" : "-";
  const { deleteTransction } = useContext(GlobalContext);
  return (
    <li
      className={transction.amount > 0 ? "list-item plus" : "list-item minus"}>
      {transction.text}
      <span>
        {sign}${Math.abs(transction.amount)}
      </span>
      <button
        onClick={() => {
          deleteTransction(transction.id);
        }}
        className='delete-btn'>
        &times;
      </button>
    </li>
  );
};
