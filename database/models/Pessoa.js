module.exports = function(sequelize,dataTypes){

    let alias = "Pessoa"
    let cols = {
        idPessoas:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: dataTypes.STRING,
        data_nasc: dataTypes.DATE,
        endereco: dataTypes.STRING,
        cpf: dataTypes.STRING,
        telefone: dataTypes.STRING,
        sexo: dataTypes.STRING,
        email: dataTypes.STRING,
        senha:dataTypes.STRING,
        status: dataTypes.BOOLEAN,
        imagem: dataTypes.STRING
    }
    let config = {
        tableName:"pessoas",
        timestamps:false
    }
    let Pessoa = sequelize.define(alias,cols,config);

    Pessoa.associate = function(models){
        Pessoa.hasOne(models.Assinatura,{
            as:"assinatura",
            foreignKey:"fk_pessoas"
        })
    }
    return Pessoa;
}