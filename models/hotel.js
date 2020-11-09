
module.exports = function(sequelize, DataTypes) {
    // Create table "Guests" with columns name, rooms, and phone
    var Guest = sequelize.define( "Guest", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
        },
        amount: {
            type: DataTypes.INTEGER
        },
        checkin: {
            type: DataTypes.STRING,
        },
        checkout: {
            type: DataTypes.STRING,
        },
    });
    return Guest
};