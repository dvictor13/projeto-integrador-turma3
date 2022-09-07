const {body} = require('express-validator');

const validacoes = [
    body('nome').isString().notEmpty().withMessage("O nome não pode ser vazio."),
    body('email').notEmpty().withMessage("O email não pode ser vazio.").isEmail().withMessage("Digite um email válido."),
    body('senha').notEmpty().withMessage("A senha não pode ser vazia.")
]

module.exports = validacoes;