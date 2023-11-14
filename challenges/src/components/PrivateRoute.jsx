// Importa los componentes necesarios de react-router-dom
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? children : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
