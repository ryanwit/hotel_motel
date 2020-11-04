module.exports = function(sequelize, DataTypes){
    var Guest = sequelize.define( "Guest", {
        name: {
            type: DataTypes.STRING

        },
        rooms: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.INTEGER
        }
    })
    return Guest
}