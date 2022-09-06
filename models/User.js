const fs = require("fs");

const User ={
    fileName: './users.json',

    generateId: function(){
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();
    
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    create: function(userData){
        let allUsers = this.getUsers();
        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    getUsers: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findUsersById: function(id){
        let allUsers = this.getUsers();
        let userFound =  allUsers.find(oneUser => oneUser.id === id );
        return userFound;
    },

    findUserByField: function(field, value){
        let allUsers = this.getUsers();
        let userFound = allUsers.find( oneUser => oneUser[field] === value);
        return userFound;
    }

}

console.log(User.create({
    nome: "Mariana", "email": "mari@email.com",
    senha: "1234",
    cpf: "12345678",
    nascimento: "1990-02-05",
    telefone: "21152145269",
    genero: "feminino"}))