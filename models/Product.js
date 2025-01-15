// models/Product.js
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
      id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      estado: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      tableName: 'Productos',
      timestamps: false,
    });
  
    return Product;
  };
  