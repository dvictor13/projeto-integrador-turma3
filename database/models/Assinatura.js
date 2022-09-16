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
        },
        cabelo:{
            type:dataTypes.STRING
        },
        barba:{
            type:dataTypes.STRING
        }
    }
    let config = {
        tableName:"assinaturas",
        timestamps:false
    }
    let Assinatura = sequelize.define(alias,cols,config);

    Assinatura.associate = function(models){
        Assinatura.hasMany(models.Pessoa,{
            as:'pessoas',
            foreignKey:'assinatura_id'
            });

        Assinatura.belongsTo(models.Plano,{
            as:'planos',
            foreignKey:'planos_id'
        })
        }
        return Assinatura;
    }

