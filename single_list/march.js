// data structures
// arrays, dictionaries, classes, list
/** class Person{
    constructor(name, age, sex, location){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.location = location;
        this.next = null; // hold onto something or hold onto null
    }
    makefriend(person){
        this.next = person;
    }
}

let jack  = new Person('Jack', 29, "male", "San Francisco"); // invocation of the function call
let max  = new Person('Max', 30, 'Male', ' San Joe');
let jordan = new Person('Jordan', 29, 'female', 'Los Angeles');
let sarah = new Person('Sarah', 31, 'Female', 'San Diego');
console.log(jack.name); // instance of the person
console.log(jack.location);

// null is explicitly nothing

jack.next = jordan;
jordan.next = sarah;

//jack.makefriend(max);

console.log(jack.bestFriend.name);
*/

class Node{
    // attributes: name, age, location
    // constructor is the same as def__init__(self) in python
    constructor(value){ // when an instance is created the constructor is called  initialization
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class  SLL{
    constructor(){
        this.head = null;
    }
        addToFront(value){
            // create a node
            let newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
        }
        addToBack(value){
            let newNode =  new Node(value);
            let current = this.head;
            current = current.next;
            while(current){
                current = current.next;
            }
        }
        // 0(1) - array is 0(N)
        removeFront(){
            if(this.head){
                this.head = this.head.next;
            }
        }
        displayValues(){
            //display each value in the list of nodes
            let current = this.head;
            if(current == null){
                console.log("[]")
                return;
            }  let output = "[";
            //loop list;
            while(current){
                output += current.value;
                if(current.next){
                    output += ", ";
                }
                current = current.next;
            }
            output += "]";
            console.log(output);
        }
}

let myList = new SLL();
myList.addToFront(17);
myList.addToFront(5);
myList.addToFront(42);
myList.addToFront(90);

console.log(myList)

myList.displayValues();
myList.removeFront();

