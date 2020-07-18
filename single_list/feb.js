/*class Pet{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.legs = 4;
    }
    speak(){
        if(this.type == 'cat'){
            console.log('meaw')
        }
        else if(this.type == 'dog'){
            console.log('woof!!')
        } else{
            console.log('Hello')
        }
        return this
    }
}

let nameArray = ['Jack', 'Jessica', "Molly", 'Vicki', 'Nadia']

nameArray.length

let Samba = new Pet("Samba", "dog")
let Nevielle = new Pet('Nevielle', 'cat')

console.log(Samba);

console.log(Samba.name);
*/


//Linked Lists Just only really consist of heads

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(9)
/*
secondNode = new Node(11)
thirdNode = new Node(14)
fourthNode = new Node(18)
firstNode.next = secondNode
secondNode.next =thirdNode
thirdNode.next = fourthNode
*/
console.log(firstNode);

class SLL{
    constructor(node){
        this.head = node;
    }
    view(){
        let runner = this.head;
        let count =1;
        while(runner){
            console.log(`You are on Node: ${count}, its value is: ${runner.value}`)
            runner = runner.next;
            count++
        }
        return this
    }
    addFront(value){
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        console.log(`A new node has been added ${value} to the front`)
        return this
    }
    addBack(value){
        //find the end of the list 
        //add a node
        let runner = this.head;
        while(runner.next){
            console.log(`this is the current value ${runner.value}, this is the next node: ${runner.next}`)
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this
    }
}

firstSLL = new SLL(firstNode);

console.log(firstSLL);

firstSLL.addFront(11).addFront(14).addFront(17).view().addBack('Jack').addBack('Stephanie');

firstSLL.addBack();