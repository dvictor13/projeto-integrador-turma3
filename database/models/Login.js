module.exports = function(sequelize,dataTypes){

    let alias = "Login"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        usuario:{
            type:dataTypes.STRING
        },
        senha:{
            type:dataTypes.STRING
        },
        pessoas_id:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName:"login",
        timestamps:false
    }
    let Login = sequelize.define(alias,cols,config);

    return Login;
}