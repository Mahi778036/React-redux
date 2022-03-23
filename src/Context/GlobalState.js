/** @format */

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Intial State

const initialState = {
  transctions: [
    {
      id: 1,
      text: "book",
      amount: -200,
    },
    {
      id: 2,
      text: "phone",
      amount: -2000,
    },
    {
      id: 3,
      text: "salary",
      amount: 5000,
    },
    {
      id: 4,
      text: "snaks",
      amount: -100,
    },
  ],
};

//Create context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransction(id) {
    dispatch({
      type: "DELETE_TRANSCTION",
      payload: id,
    });
  }

  function addTransction(transction) {
    dispatch({
      type: "ADD_TRANSCTION",
      payload: transction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transctions: state.transctions,
        deleteTransction,
        addTransction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
