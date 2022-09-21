module.exports = function (sequelize, dataTypes) {

    let alias = "VantagemPlano"
    let cols = {
        fk_vantagens: dataTypes.INTEGER,
        fk_planos: dataTypes.INTEGER,
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        tableName: "vantagens_has_planos",
        timestamps: false
    }
    let VantagemPlano = sequelize.define(alias, cols, config);

    return VantagemPlano;
}