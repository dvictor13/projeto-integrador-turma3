module.exports = function(sequelize,dataTypes){

    let alias = "Barbearia"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:dataTypes.STRING
        },
        enderenco:{
            type:dataTypes.STRING
        },
        telefone:{
            type:dataTypes.STRING
        }
    }
    let config = {
        tableName:"barbearias",
        timestamps:false
    }
    let Barbearia = sequelize.define(alias,cols,config);

    return Barbearia;
}