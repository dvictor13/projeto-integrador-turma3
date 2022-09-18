module.exports = function (sequelize, dataTypes) {

    let alias = "ServicoBarbearia"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_servicos: dataTypes.INTEGER,
        fk_barbearias: dataTypes.INTEGER
    }
    let config = {
        tableName: "servicos_has_barbearias",
        timestamps: false
    }
    let ServicoBarbearia = sequelize.define(alias, cols, config);

    return ServicoBarbearia;
}