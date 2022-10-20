const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Ownership', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      garage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      m2: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('Casa','PH','Departamento','Duplex','Terreno','Cochera'),
        allowNull: false,
      },
      expenses: {
        type: DataTypes.BIGINT,
      },
      seller: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      state: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.BIGINT,
      },
      floors: {
        type: DataTypes.INTEGER,
      },
      review: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      address: {
        type: DataTypes.STRING,
      }
  },
  {
    timestamps: false
  });
};