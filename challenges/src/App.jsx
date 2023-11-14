import React from 'react';
import { decrement as decrementAction, increment } from './reducers/slices/counterSlice';
import { useUserContext } from './context/UserContext'; // Adjust the path accordingly
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const user = useUserContext();

  return (
    <div>
      <h1>Redux counter</h1>
      <p>Holaa, {user.username}!</p>
      <hr />
      <span>Counter es: {counter}</span>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrementAction())}>-1</button>
    </div>
  );
}
