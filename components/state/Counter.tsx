import React, { useReducer } from "react";

type CounterState = {
    count:number
}

type CounterAction ={
    type:string
    payload:number
}

const initialState = { count: 0 };

function reducer(state: CounterState, action:CounterAction) {
  switch (action.type) {
    case "up":
      return { count: state.count + action.payload };
    case "down":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "up", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "down", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
