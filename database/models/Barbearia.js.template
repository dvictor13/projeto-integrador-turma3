module.exports = function(sequelize,dataTypes){

    let alias = "Barbearia"
    let cols = {
        id_barbearia:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:dataTypes.STRING
        },
        endereco:{
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

    Barbearia.associate = function (models){
        Barbearia.belongsToMany(models.Plano,{
            as:'barbaria_planos',
            through:models.BarbeariaPlano,
            foreignKey:'fk_planos',
            otherKey:'fk_barbearia',
            timestamps:false
        })
    }

    return Barbearia;
}