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

module.exports = User;

    // update: function(objeto){
    //     let allUsers = this.getUsers();
    //     let userAntigo = findUsersById(objeto.id);
    //     let i = allUsers.indexOf(userAntigo)
    //     allUsers[i] = objeto
    //     User = allUsers;
    // }

// }

// module.exports = User;