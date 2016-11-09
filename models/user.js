module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		current_user: DataTypes.TEXT,
	}, {
		classMethods: {
			associate: function(models) {
				// example on how to add relations
				//People.hasMany(models.Comments);
			}
		}
	});
	return User;
};