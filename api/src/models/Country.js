const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* País con las siguientes propiedades:
  ID (Código de 3 letras) *
  Nombre *
  Imagen de la bandera *
  Continente *
  Capital *
  Subregión
  Área
  Población */
/**** El modelo de la base de datos deberá tener las siguientes entidades 
      (Aquellas propiedades marcadas con asterísco deben ser obligatorias):  */

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {  //ide de la ciudad
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {  // Nombre de la ciudad
      type: DataTypes.STRING,
      allowNull: false,
    },
        flagimg: { //Bandera del páis
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: { //Región donde se encuentra la ciudad
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: { // Capital de la ciudad

      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.INTEGER,
      
    },
    population:{
      type: DataTypes.INTEGER,
      
    }

  },{timestamps:false});

};
