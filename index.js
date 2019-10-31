class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static describe(subject) {
        return `${subject.name}, ${subject.age} years old`;
    }
    
    greet(greeting) {
        return `Hello, I am ${this.name}. I am ${this.age} years old. This conversation is ${greeting}.`;
    }
}

const me = new Person('Prescott', 26);
const jason = new Person('Jason', 45);

console.log(Person.describe(jason));
console.log(jason.greet('super awkward'));
console.log(me.greet('silly'));