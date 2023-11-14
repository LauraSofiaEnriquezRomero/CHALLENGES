import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../reducers/slices/counterSlice';
import { useUserContext } from '../context/UserContext'; 

const MyComponent = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const user = useUserContext();

  return (
    <div>
      <p>Hello, {user.username}!</p>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
    </div>
  );
};

export default MyComponent;
