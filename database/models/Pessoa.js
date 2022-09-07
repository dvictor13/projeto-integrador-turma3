module.exports = function(sequelize,dataTypes){

    let alias = "Pessoa"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        data_nasc:{
            type:dataTypes.DATEONLY
        },
        enderenco:{
            type:dataTypes.STRING
        },
        cpf:{
            type:dataTypes.STRING(11)
        },
        assinaturas_id:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName:"pessoas",
        timestamps:false
    }
    let Pessoa = sequelize.define(alias,cols,config);

    Pessoa.associate = function(models){
        Pessoa.belongsTo(models.Agenda,{
            as:"agenda",
            foreignKey:"agenda_id"
        });
        Pessoa.belongsTo(models.Assinatura,{
            as:"assinatura",
            foreignKey:"assinatura_id"
        })
    }

    return Pessoa;
}