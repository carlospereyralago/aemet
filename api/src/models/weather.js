module.exports = function (sequelize, DataTypes) {//esta funcionalidad se autoejecuta cuando llamo el archivo y me dice que puede ser llamada (la funcion) por otro archivo
  const Weather = sequelize.define('Weather',
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    indicativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    altitud: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmed: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    prec: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tmin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tmax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dir: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    velmedia: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    racha: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sol: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    presMax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    presMin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hrMedia: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hrMax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    hrMin: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE
    }
          }, {
        sequelize,
        tableName: 'weather',//esto me dice que está interactuando con la tabla 'users' 
        timestamps: true,// esto pone la fecha del momento en que se crea o se modifica un dato
        paranoid: true,//esto me asegura que me muestre los datos de la tabla con delete null
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    Weather.associate = function (models) {
    
    }
  
    return Weather //aqui le aclaro si el modelo esta relacionado con otros modelos

  }
