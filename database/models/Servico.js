module.exports = function (sequelize, dataTypes) {

    let alias = "Servico"
    let cols = {
        idServicos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: dataTypes.STRING,
    }
    let config = {
        tableName: "servicos",
        timestamps: false
    }
    let Servico = sequelize.define(alias, cols, config);

    Servico.associate = function (models) {

        Servico.belongsToMany(models.Barbearia, {
            foreignKey: 'fk_barbearias',
            as: 'barbearia',
            through: models.ServicoBarbearia
        })
    }

    return Servico;
}