
module.exports = function(sequelize, DataTypes) {

    // Create table "Guests" with columns name, rooms, and phone
    var Guest = sequelize.define( "Guest", {
        name: {
            type: DataTypes.STRING
        },
        rooms: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
            
        }
    });
    return Guest
};