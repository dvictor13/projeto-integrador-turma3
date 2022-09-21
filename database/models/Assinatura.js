module.exports = function (sequelize, dataTypes) {

    let alias = "Assinatura"
    let cols = {
        idAssinaturas: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: dataTypes.STRING,
        periodo: dataTypes.STRING,
        fk_planos: dataTypes.INTEGER,
        cabelo: dataTypes.INTEGER,
        barba: dataTypes.INTEGER
    }
    let config = {
        tableName: "assinaturas",
        timestamps: false
    }
    let Assinatura = sequelize.define(alias, cols, config);

    Assinatura.associate = function(models){
        
        Assinatura.belongsTo(models.Plano,{
            as:'planos',
            foreignKey:'fk_planos'
        })

        Assinatura.hasMany(models.Pessoa,{
            as:'pessoas',
            foreignKey:'fk_assinaturas'
        });
    }


    return Assinatura;
}
