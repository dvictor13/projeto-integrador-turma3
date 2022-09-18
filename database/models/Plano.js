module.exports = function (sequelize, dataTypes) {

    let alias = "Plano"
    let cols = {
        idPlanos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: dataTypes.STRING,
        cabelo: dataTypes.INTEGER,
        barba: dataTypes.INTEGER,
        preco: dataTypes.DECIMAL,
        imagem: dataTypes.STRING,
        economia: dataTypes.DECIMAL

    }
    let config = {
        tableName: "planos",
        timestamps: false
    }
    let Plano = sequelize.define(alias, cols, config);

    Plano.associate = function (models) {

        Plano.hasMany(models.Assinatura, {
            as: 'assinaturas',
            foreignKey: 'planos_id'
        })

        Plano.belongsToMany(models.Vantagem, {
            foreignKey: 'vantagens_id',
            as: 'vantagens',
            through: models.VantagemPlano
        })

    }

    return Plano;
}