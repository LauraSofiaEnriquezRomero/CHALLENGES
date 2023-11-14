import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NavComponent } from "./components/NavComponent";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { Login } from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import UserProvider from "./components/UserProvider";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <ErrorFallback error={error} />;
    }

    return this.props.children;
  }
}

function App() {
  const [user, setUser] = useState(null);
  const [lastVisitedPage, setLastVisitedPage] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLastVisitedPage = (path) => {
    setLastVisitedPage(path);
  };

  return (
    <ErrorBoundary>
      <Router>
        <UserProvider>
          <div>
            <NavComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={<Login onLogin={handleLogin} onLastVisitedPage={handleLastVisitedPage} />}
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute isAuthenticated={user}>
                    <div>
                      <h1>Welcome {user}!</h1>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <p>Last visited page: {lastVisitedPage || "N/A"}</p>
          </div>
        </UserProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

// Función de ejemplo para enviar el error a un servicio
function logErrorToMyService(error, errorInfo) {
  // Implementa la lógica para enviar el error a tu servicio de registro
  console.error("Error captured by ErrorBoundary:", error, errorInfo);
}
