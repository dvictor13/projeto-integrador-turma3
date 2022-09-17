module.exports = function(sequelize,dataTypes){

    let alias = "Pessoa"
    let cols = {
        id_pessoa:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:dataTypes.STRING
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
        usuario: dataTypes.STRING,

        senha:dataTypes.STRING,

        status:{
            type:dataTypes.BOOLEAN
        },
        imagem:{
            type:dataTypes.STRING
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
        Pessoa.belongsTo(models.Assinatura,{
            as:"assinatura",
            foreignKey:"assinatura_id"
        })
    }
    return Pessoa;
}