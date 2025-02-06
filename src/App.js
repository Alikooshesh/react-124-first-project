
import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';

function counterReducer(state,action){
  console.log(action)
  switch(action.type){
    case "decrease":
      return state - 1;
    case "increase":
      return state + 1;
    case "decrease-2":
      return state - 2;
    case "increase-2":
      return state + 2;
    default :
      return state;
  }
}

function App() {

  const [counter , counterDispatch] = useReducer(counterReducer,0)

  return(
    <>
      <button onClick={()=> counterDispatch({type : "decrease"})}>-</button>
      <p>{counter}</p>
      <button onClick={()=> counterDispatch({type : "increase"})}>+</button>
    </>
  )
}

export default App;
