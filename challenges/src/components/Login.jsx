// En tu componente Login
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../components/UserProvider';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUserContext();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Realiza cualquier lógica de autenticación necesaria
    // Luego, llama a la función de inicio de sesión proporcionada por el contexto
    login(username, window.location.pathname); // Guarda la última página visitada
    navigate('/dashboard'); // O redirige a la página después de iniciar sesión
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
