// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    deleteUserById,
} = require('../controllers/userController');

/**
 * @swagger
 * /api/usuarios/crear:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario.
 *               correo:
 *                 type: string
 *                 description: Correo del usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *               rol:
 *                 type: string
 *                 description: Rol del usuario (Admin o Usuario).
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 */
router.post('/crear', createUser);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios activos
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios activos obtenida exitosamente.
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID (cambiar activo a false)
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente (estado cambiado a false).
 *       404:
 *         description: Usuario no encontrado.
 */
router.delete('/:id', deleteUserById);

module.exports = router;
