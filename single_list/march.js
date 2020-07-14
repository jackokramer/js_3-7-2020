// data structures
// arrays, dictionaries, classes, list

class Person{
    // attributes: name, age, location
    // constructor is the same as def__init__(self) in python
    constructor(name, age, sex, location){ // when an instance is created the constructor is called  initialization
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.location = location;
    }
}

let jack  = new Person('Jack', 29, "male", "San Francisco"); // invocation of the function call
console.log(jack.name); // instance of the person
console.log(jack.location);