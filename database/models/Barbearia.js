module.exports = function(sequelize,dataTypes){

    let alias = "Barbearia"
    let cols = {
        idBarbearias:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: dataTypes.STRING,
        imagem: dataTypes.STRING,
        rua: dataTypes.STRING,
        loja: dataTypes.STRING,
        bairro: dataTypes.STRING,
        horarioUtil: dataTypes.STRING,
        horarioFds: dataTypes.STRING,
        telefone: dataTypes.STRING
    }
    let config = {
        tableName:"barbearias",
        timestamps:false
    }
    let Barbearia = sequelize.define(alias,cols,config);

    Barbearia.associate = function (models){
        Barbearia.belongsToMany(models.Plano,{
            as:'planosA',
            through: models.BarbeariaPlano,
            foreignKey:'fk_planos'
        })

        Barbearia.belongsToMany(models.Servico, {
            foreignKey: 'fk_barbearias',
            otherKey:'fk_servicos',
            as: 'servicos',
            through: models.ServicoBarbearia
        })
    }

    return Barbearia;
}