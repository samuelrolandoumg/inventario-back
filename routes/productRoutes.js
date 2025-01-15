// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('../controllers/productController');

/**
 * @swagger
 * /api/productos/crear:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto.
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto.
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 */
router.post('/crear', createProduct);

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos activos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado.
 *       404:
 *         description: Producto no encontrado.
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto.
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto.
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 */
router.put('/:id', updateProductById);

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID (cambiar estado a false)
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente (estado cambiado a false).
 *       404:
 *         description: Producto no encontrado.
 */
router.delete('/:id', deleteProductById);

module.exports = router;
