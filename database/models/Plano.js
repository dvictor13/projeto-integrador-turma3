module.exports = function (sequelize, dataTypes) {

    let alias = "Planos"
    let cols = {
        id_planos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: dataTypes.STRING
        },
        cabelo: {
            type: dataTypes.INTEGER
        },
        barba: {
            type: dataTypes.INTEGER
        }
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
        Plano.belongsToMany(models.Barbearia,{
            through:models.BarbeariaPlano,
            foreignKey:'fk_barbearia',
            otherKey:'fk_planos',
            as:'plano_barbearia'
        })
    }

    return Plano;
}