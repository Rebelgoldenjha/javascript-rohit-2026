// ES6 

 class user{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}adcd`
    }
 }

const rebel = new user("rohit", "rohit@gmail,com", " 12345")
console.log(rebel.encryptPassword());