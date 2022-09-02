module.exports = function(sequelize,dataTypes){

    let alias = "Agenda"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        data_hora:{
            type:dataTypes.DATE
        },
        cabelo:{
            type:dataTypes.INTEGER
        },
        barba:{
            type:dataTypes.INTEGER
        },
        pessoas_id:{
            type:dataTypes.INTEGER
        },       
        barbearias_id:{
            type:dataTypes.INTEGER
        },
    }
    let config = {
        tableName:"agenda",
        timestamps:false
    }
    let Agenda = sequelize.define(alias,cols,config);

    Agenda.associate = function(models){
        Agenda.hasMany(models.Pessoa,{
            as:"pessoas",
            foreignKey:"pessoas_id"
        })
    }

    return Agenda;
}