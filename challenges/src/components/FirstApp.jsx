import React from 'react'
import { useCounter } from '../hooks/useCounter';


export const FirstApp = ({value}) => {
  
  const { counter, Sum, Less, Reset } = useCounter(value);

  return (
    <>
      <h1> Contador </h1>
      <samp> {counter} </samp>
      <button onClick={() => Sum()}> +1 </button>
      <button onClick={() => Less()}> -1 </button>
      <button onClick={() => Reset()}> Reset </button>
    </>
  );
};
