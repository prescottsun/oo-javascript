// var mom = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     eyeColor: 'brown',
//     hairColor: 'black',

//     mom.prototype.showInfo = function() {
//         return `${this.firstName}, ${this.lastName}, ${this.eyeColor}, ${this.hairColor}`;
//     };
// };

// var daughter = {
//     firstName: 'Ilene',
//     hairColor: 'brown',

// };

// daughter.__proto__ = mom;

// console.log(daughter.firstName, daughter.lastName);
// console.log(mom.showInfo);

class Mom {
    constructor(firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
}

class Child extends Mom {
    constructor(firstName, hairColor, age, lastName, eyeColor) {
        super(lastName, eyeColor);
        this.firstName = firstName;
        this.lastName = mom.lastName;
        this.eyeColor = mom.eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
}

const mom = new Mom('Alice', 'Wong', 'brown', 'black');
const daughter = new Child('Ilene', 'brown', 14);

// console.log('mom is: ', mom);
console.log('daughter is: ', daughter);


// class Person {
//     constructor(name, friends) {
//         this.name = name;
//         this.friends = friends;
//     }

//     addFriend(friend) {
//         return this.friends.push(friend);
//     };

//     static createGreeting(other) {
//         return 'Yo ' + other.name + '! from ' + this.name + '.';
//     };
    
//     static greet(other) {
//         console.log(this.createGreeting(other));
//     }
// }
