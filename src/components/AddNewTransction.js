/** @format */

import React, { useContext, useRef } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./AddNewTransction.css";

export const AddNewTransction = () => {
  const { addTransction } = useContext(GlobalContext);
  const textRef = useRef();
  const amountRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const newTransction = {
      id: Math.floor(Math.random() * 100000),
      text: textRef.current.value,
      amount: +amountRef.current.value,
    };

    addTransction(newTransction);
    textRef.current.value = "";
    amountRef.current.value = "";
  };
  return (
    <div className='addtransction'>
      <h3>Add new transction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-item'>
          <label>Text</label>
          <input type='text' ref={textRef} placeholder='Enter Text...' />
        </div>
        <div className='form-item'>
          <label>
            Amount<br></br>(negative - expense, postive - income)
          </label>
          <input type='number' placeholder='Enter Amount...' ref={amountRef} />
        </div>
        <button className='add-trasction-btn'>Add transction</button>
      </form>
    </div>
  );
};
