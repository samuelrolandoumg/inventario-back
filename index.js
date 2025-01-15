const express = require('express');
const sequelize = require('./Database/db');
const app = express();
const { PORT } = require("./Database/config");
const db = require('./Database/db'); // Importa todo el objeto db
const swaggerSpec = require('./config/swagger');
const swaggerUi = require('swagger-ui-express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

//require('./Database/relations');

app.use(express.json());
const cors = require('cors');

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:4200'], // Agrega todos los dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
}));

// Middleware global simplificado (ya no configures los encabezados manualmente)
app.use(express.json());

// Swagger Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/productos', productRoutes);
app.use('/api/usuarios', userRoutes);


// Iniciar el servidor
db.sequelize.sync() 
  .then(() => {
    console.log("Conexión exitosa y base de datos sincronizada.");
  })
  .catch((err) => {
    console.error("Error al conectar y sincronizar la base de datos: ", err.message);
  });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
});