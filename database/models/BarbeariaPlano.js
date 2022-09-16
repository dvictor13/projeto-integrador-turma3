module.exports = (sequelize,dataTypes) => {
    const BarbeariaPlano = sequelize.define('barbearia_has_planos',{
        id_barbearia_plano:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_barbearia:dataTypes.INTEGER,
        fk_planos:dataTypes.INTEGER
    })
    return BarbeariaPlano
}