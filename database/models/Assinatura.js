module.exports = function(sequelize,dataTypes){

    let alias = "Assinatura"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        status:{
            type:dataTypes.STRING
        },
        periodo:{
            type:dataTypes.STRING
        },
        planos_id:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName:"assinaturas",
        timestamps:false
    }
    let Assinatura = sequelize.define(alias,cols,config);

    return Assinatura;
}