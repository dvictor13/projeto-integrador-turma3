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
            foreignKey: 'fk_planos'
        })

        Plano.belongsToMany(models.Vantagem, {
            foreignKey: 'fk_planos',
            otherKey:'fk_vantagens',
            as: 'vantagens',
            through: models.VantagemPlano
        })

        Plano.belongsToMany(models.Barbearia, {
            as:'barbeariasA',
            through: models.BarbeariaPlano,
            foreignKey:'fk_planos',
            otherKey:'fk_barbearias',
        })

    }

    return Plano;
}