const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'web')));

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/sistema_calificaciones', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a la base de datos'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Modelo de datos
const studentSchema = new mongoose.Schema({
  nombre: String,
  codigoUnico: String,
  rfidId: String,
  email: String,
  calificacion: Number
});
const Student = mongoose.model('Student', studentSchema);

// Endpoint para recibir estudiantes (POST)
app.post('/api/students', async (req, res) => {
  try {
    const { nombre, codigoUnico, rfidId, email, calificacion } = req.body;
    const newStudent = new Student({ nombre, codigoUnico, rfidId, email, calificacion });
    await newStudent.save();
    res.status(201).json({ message: '✅ Estudiante guardado correctamente' });
  } catch (error) {
    console.error('❌ Error al guardar estudiante:', error);
    res.status(500).json({ error: 'Error al guardar el estudiante' });
  }
});

// Endpoint para obtener la lista de estudiantes (GET)
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    console.error('❌ Error al obtener los estudiantes:', error);
    res.status(500).json({ error: 'Error al obtener los estudiantes' });
  }
});

// Ruta para servir "index.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
