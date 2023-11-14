import React from "react";
import { NavLink } from "react-router-dom";
import "./estilos.css"; // Importa el archivo CSS

export const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="active" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
