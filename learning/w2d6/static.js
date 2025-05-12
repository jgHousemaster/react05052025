class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.username}`)
    }

    static getUserCount() {
        return this.userCount;
    }
}

const user1 = new User("Spongebob");

console.log(user1.username)
console.log(User.getUserCount())