module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			//require a text value input
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			//default it to false
			defaultValue: false,
		}
	});
	return Burger;
	};
