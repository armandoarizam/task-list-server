const express = require('express');
const router = express.Router();

// Ruta para crear una nueva tarea
router.post('/tasks', (req, res) => {
    // Lógica para crear una nueva tarea
});

// Ruta para eliminar una tarea específica
router.delete('/tasks/:id', (req, res) => {
    // Lógica para eliminar una tarea específica
});

// Ruta para actualizar una tarea específica
router.put('/tasks/:id', (req, res) => {
    // Lógica para actualizar una tarea específica
});

module.exports = router;
