# Sistema de Calificaciones - Saew V2

## 📌 Descripción
Este es un proyecto desarrollado en **Node.js con Express** y **MongoDB**, diseñado para gestionar las calificaciones de estudiantes. La aplicación permite registrar, almacenar y consultar información de estudiantes, incluyendo **nombre, código único, RFID, email y calificación**.

---

## 📁 Estructura del Proyecto
```
/SAEW_V2
│── database/               # Carpeta reservada para futuros archivos de BD
│── sistema_calificaciones/  # Carpeta principal del proyecto
│   ├── node_modules/        # Dependencias instaladas con npm
│   ├── web/                 # Archivos del frontend (HTML, CSS, imágenes)
│   │   ├── fondo.jpg        # Imagen de fondo para el sistema
│   │   ├── index.html       # Página principal
│   │   ├── style.css        # Estilos del frontend
│   ├── package.json         # Configuración del proyecto y dependencias
│   ├── package-lock.json    # Archivo de control de versiones de dependencias
│   ├── server.js            # Servidor en Express
│── README.md                # Documentación del proyecto
```

---

## 🔧 Instalación y Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/sistema-calificaciones-saew-v2.git
cd sistema_calificaciones
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el servidor
Ejecuta el servidor con:
```bash
node server.js
```
Para ejecutar en modo **auto-reinicio (Nodemon)**:
```bash
npx nodemon server.js
```
El servidor estará corriendo en:
```
http://localhost:3000
```

---

## 🛠 Configuración de MongoDB

Este proyecto utiliza **MongoDB** como base de datos. Asegúrate de que **MongoDB esté instalado y en ejecución** en tu máquina.

### 📌 Conexión a MongoDB
El servidor se conecta a la base de datos usando:
```
mongodb://localhost:27017/sistema_calificaciones
```
Para visualizar la base de datos, puedes usar **MongoDB Compass** o ejecutar en la terminal:
```bash
mongosh
use sistema_calificaciones
db.students.find().pretty()
```

---

## 📊 Estructura de la Base de Datos

El proyecto usa la colección `students` dentro de la base de datos `sistema_calificaciones`.  
Cada estudiante tiene la siguiente estructura:

```json
{
  "nombre": "David Averos",
  "codigoUnico": "STU12345",
  "rfidId": "123ABC456",
  "email": "david.averos@example.com",
  "calificacion": 85
}
```

### 📌 Importar los Datos de Ejemplo
Si deseas importar los datos de prueba a MongoDB, usa este comando en la terminal:
```bash
mongoimport --db sistema_calificaciones --collection students --jsonArray --file database/students.json
```

---

## 🌐 Endpoints Disponibles en la API

### 🔹 Obtener todos los estudiantes
```
GET /api/students
```
📌 **Respuesta esperada:**
```json
[
  {
    "nombre": "David Averos",
    "codigoUnico": "STU12345",
    "rfidId": "123ABC456",
    "email": "david.averos@example.com",
    "calificacion": 85
  },
  {
    "nombre": "Jeremy Torres",
    "codigoUnico": "STU67890",
    "rfidId": "123ABC123",
    "email": "jeremy.torres@example.com",
    "calificacion": 92
  }
]
```

### 🔹 Añadir un nuevo estudiante
```
POST /api/students
```
📌 **Formato del JSON a enviar:**
```json
{
  "nombre": "Nuevo Estudiante",
  "codigoUnico": "STU98765",
  "rfidId": "RFID98765",
  "email": "nuevo.estudiante@example.com",
  "calificacion": 88
}
```

### 🔹 Eliminar un estudiante por ID
```
DELETE /api/students/:id
```

---

## 🖥 Visualización del Frontend

Para acceder a la interfaz web del sistema, abre:
```
http://localhost:3000
```
Este archivo carga los datos de los estudiantes de forma dinámica en la tabla.

---

## 🛠 Tecnologías Utilizadas
- **Node.js** + **Express.js** (Servidor Backend)
- **MongoDB** + **Mongoose** (Base de Datos)
- **HTML5 + CSS3 + Bootstrap** (Frontend)
- **JavaScript Fetch API** (Consumo de API)

---

## 📜 Licencia
Este proyecto es de código abierto bajo la **Licencia MIT**.

---

🚀 **¡Listo! Ahora puedes iniciar y probar el sistema de calificaciones Saew V2.** 🚀