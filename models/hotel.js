
module.exports = function(sequelize, DataTypes) {
    var Guest = sequelize.define("Guest", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        phone: {
            type: DataTypes.INTEGER,
            defaultValue: 3038675309,
            validate: {
                len: [10],
            }
        },
    });
    return Guest;
};