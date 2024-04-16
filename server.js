const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Lista de tareas
const tasks = [
    {
        id: 123456,
        isCompleted: false,
        description: "Walk the dog"
    }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
