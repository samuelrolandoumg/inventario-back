require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000, // Puerto en el que corre tu servidor
  host: process.env.DB_HOST || 'localhost', // Servidor de la base de datos
  username: process.env.DB_USER || 'sa', // Usuario de la base de datos
  password: process.env.DB_PASSWORD || '123', // Contraseña de la base de datos
  database: process.env.DB_DATABASE || 'inventario', // Nombre de la base de datos
  port: process.env.DB_PORT || 1433, // Puerto de la base de datos
  dialect: "mssql", // Dialecto (MySQL, PostgreSQL, etc.)
  pool: {
    max: 5, // Máximo de conexiones en el pool
    min: 0, // Mínimo de conexiones en el pool
    acquire: 30000, // Tiempo máximo, en milisegundos, que el pool tratará de conectar antes de lanzar un error
    idle: 10000, // Tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
  },
};
