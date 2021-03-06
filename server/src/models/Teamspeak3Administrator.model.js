module.exports = exports = (sequelize, datatypes) => {
    const Teamspeak3Administrator = sequelize.define('Teamspeak3Administrator', {
        databaseId: {
            type: datatypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nickname: datatypes.STRING,
    }, {
        timestamps: false,
    });

    return Teamspeak3Administrator;
}