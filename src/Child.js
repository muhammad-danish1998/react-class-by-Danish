import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = ({ num }) => {
  
  let counter =  useContext(counterContext)
  const increse = () => {
    num[1](num[0] + 1);
  };
  const Decrese = () => {
    if(num[0] == 0){
      num[1](0)
    }
    else{
    num[1](num[0] - 1);

    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increse}>increase</button>
      <button onClick={Decrese}>Decrease</button>

    </div>
  );
};

export default Child;

// current , fun  usestate
