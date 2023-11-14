import React, { useReducer } from "react";
import { useContext } from "react";  // Asegúrate de importar useContext
import UserContext from "../context/UserContext";
import UserReducer from "./UserReducer";

// Agrega esta función hook useUserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de un UserProvider");
  }
  return context;
};

const UserProvider = (props) => {
  const initialState = {
    isLoggedIn: false,
    username: "",
    lastVisitedPage: "",
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const fakeLogin = () => {
    // Implementa la lógica de autenticación ficticia
    const fakeUsername = "fakeUser";
    const lastVisitedPage = localStorage.getItem("lastVisitedPage") || "/";
    
    dispatch({
      type: "LOGIN",
      payload: { username: fakeUsername, lastVisitedPage },
    });
  };

  const logout = () => {
    // Implementa cualquier lógica de logout necesaria
    dispatch({
      type: "LOGOUT",
    });
  };

  const login = (username, lastVisitedPage) => {
    // Implementa la lógica de autenticación con el usuario proporcionado
    dispatch({
      type: "LOGIN",
      payload: { username, lastVisitedPage },
    });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        login,
        fakeLogin,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
