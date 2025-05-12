function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(`${this.email} has logged in`);
}

User.prototype.logout = function () {
    this.online = false;
    console.log(`${this.email} has logged out`);
}

const user1 = new User('ryu@ninjas.com', 'Ryu');
const user2 = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(user1);
user2.login();