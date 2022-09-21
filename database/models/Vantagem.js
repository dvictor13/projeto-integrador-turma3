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
        
        Vantagem.belongsToMany(models.Plano, {
            foreignKey: 'fk_vantagens',
            as: 'planos',
            through: models.VantagemPlano
        })
    }

    return Vantagem;
}