module.exports = function(sequelize, DataTypes) {
  var Use = sequelize.define("Use", {
  //   `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  // `Make` VARCHAR( 255) NOT NULL,
  // `Model` VARCHAR( 255 ) NOT NULL,
  // `Year` Int(2) NOT NULL,
  // `Price` Int(6),
  // `Mileage` Int (6),
  // `DriveType` VARCHAR(255),
  // `Engine` VARCHAR(255),
  // `Transmission` VARCHAR(255),
  // `FuelType` VARCHAR(255),
  // `MPG` VARCHAR(255),
  // `Interior` VARCHAR(255),
  // `Exterior` VARCHAR(255),
  // `VehicalFeatures` TEXT ,
  // `Contact` Int(10),
  
  Make: {
      type: DataTypes.STRING,
    },
    Model: {
      type: DataTypes.STRING,
    },
     
    Year: {
    type: DataTypes.INTEGER,
  },
  Price: {
    type: DataTypes.INTEGER,
  },
   
  Mileage: {
    type: DataTypes.INTEGER,
  },
  Engine: {
    type: DataTypes.STRING,
  },
   
  DriveType: {
    type: DataTypes.STRING,
  },
  Transmission: {
    type: DataTypes.STRING,
  },
   
  FuelType: {
    type: DataTypes.STRING,
  },
  MPG: {
    type: DataTypes.STRING,
  },
   
  Interior: {
    type: DataTypes.STRING,
  },
  Exterior: {
    type: DataTypes.STRING,
  },
   
  VehicalFeatures: {
    type: DataTypes.TEXT,
  },
  Contact: {
    type: DataTypes.INTEGER,
  }

  });
  return Use;
};
