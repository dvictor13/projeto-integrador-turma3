module.exports = (sequelize,dataTypes) => {
    
    let alias = "BarbeariaPlano"
    let cols = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_barbearias:dataTypes.INTEGER,
        fk_planos:dataTypes.INTEGER
    }
    let config = {
        tableName: "barbearias_has_planos",
        timestamps: false
    }
    let BarbeariaPlano = sequelize.define(alias, cols, config);

    return BarbeariaPlano
}