module.exports = function (sequelize, dataTypes) {

    let alias = "VantagemPlano"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        vantagens_id: dataTypes.INTEGER,
        planos_id: dataTypes.INTEGER
    }
    let config = {
        tableName: "vantagens_has_planos",
        timestamps: false
    }
    let VantagemPlano = sequelize.define(alias, cols, config);

    VantagemPlano.associate = function (models) {

        VantagemPlano.hasMany(models.Assinatura, {
            as: 'assinaturas',
            foreignKey: 'planos_id'
        })

    }

    return VantagemPlano;
}