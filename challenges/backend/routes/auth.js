// authRoutes.js
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("Login route hit");
  // ... Implementación para la ruta de inicio de sesión
});

router.post("/register", (req, res) => {
  console.log("Register route hit");
  // ... Implementación para la ruta de registro
});

router.get("/profile", (req, res) => {
  console.log("Profile route hit");
  // ... Implementación para la ruta de perfil
});

module.exports = router;
