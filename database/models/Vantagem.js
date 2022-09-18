module.exports = function (sequelize, dataTypes) {

    let alias = "Vantagem"
    let cols = {
        idVantagens: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: dataTypes.STRING,
    }
    let config = {
        tableName: "vantagens",
        timestamps: false
    }
    let Vantagem = sequelize.define(alias, cols, config);

    Vantagem.associate = function (models) {

        Vantagem.hasMany(models.Assinatura, {
            as: 'assinaturas',
            foreignKey: 'planos_id'
        })

        Vantagem.belongsToMany(models.Plano, {
            foreignKey: 'planos_id',
            as: 'planos',
            through: models.VantagemPlano
        })
    }

    return Vantagem;
}