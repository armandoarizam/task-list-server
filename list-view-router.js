const express = require('express');
const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/tasks', (req, res) => {
    // Lógica para obtener y enviar todas las tareas
});

// Ruta para ver una tarea específica
router.get('/tasks/:id', (req, res) => {
    // Lógica para obtener y enviar una tarea específica
});

// Ruta para filtrar por tareas completas o incompletas
router.get('/tasks/filter/:completed', (req, res) => {
    // Lógica para filtrar y enviar tareas completas o incompletas
});

module.exports = router;
