module.exports = function(sequelize,dataTypes){

    let alias = "Planos"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:dataTypes.STRING
        },
        cabelo:{
            type:dataTypes.INTEGER
        },
        barba:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName:"planos",
        timestamps:false
    }
    let Plano = sequelize.define(alias,cols,config);

    return Plano;
}