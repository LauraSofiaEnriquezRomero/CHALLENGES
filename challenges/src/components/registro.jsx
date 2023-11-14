import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerWithEmailAndPassword } from '../store/slices/Thunks';
import { logout } from '../store/slices/AuthSlice';

const Registro = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: 'user@example.com',
    password: '1324',
  });

  const submitCB = (e) => {
    e.preventDefault();
    dispatch(registerWithEmailAndPassword(email, password));
  };

  return (
    <>
      <h1>Registro</h1>
      <hr />
      {user ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <form onSubmit={submitCB}>
          <input type="email" name="email" onChange={onInputChange} value={email} />
          <input type="password" name="password" onChange={onInputChange} value={password} />

          <button type="submit">Registro</button>
        </form>
      )}
    </>
  );
};

export default Registro;
