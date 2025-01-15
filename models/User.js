// models/User.js
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        correo: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        rol: {
            type: Sequelize.STRING(50),
            allowNull: false,
            validate: {
                isIn: [['Admin', 'Usuario']]
            },
        },
        activo: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
    }, {
        tableName: 'Usuarios',
        timestamps: false,
    });

    return User;
};
