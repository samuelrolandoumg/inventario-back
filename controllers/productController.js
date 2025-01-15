// controllers/productController.js
const db = require('../Database/db');
const Product = db.Product;

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  const { nombre, descripcion } = req.body;

  try {
    const newProduct = await Product.create({ nombre, descripcion });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { estado: true } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { id_producto: id, estado: true } });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto por ID
exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  try {
    const product = await Product.findOne({ where: { id_producto: id, estado: true } });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    product.nombre = nombre;
    product.descripcion = descripcion;
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un producto por ID (cambia el estado a false)
exports.deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { id_producto: id, estado: true } });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    product.estado = false;
    await product.save();

    res.status(200).json({ message: 'Producto eliminado exitosamente (estado cambiado a false)' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
