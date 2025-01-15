// controllers/userController.js
const db = require('../Database/db');
const User = db.User;

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { nombre, correo, password, rol } = req.body;

    try {
        const newUser = await User.create({ nombre, correo, password, rol });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los usuarios activos
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: { activo: true } });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un usuario (cambiar activo a false)
exports.deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ where: { id_usuario: id, activo: true } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        user.activo = false;
        await user.save();

        res.status(200).json({ message: 'Usuario eliminado exitosamente (estado cambiado a false)' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
