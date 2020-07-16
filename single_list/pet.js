class Pet{
    construtor(){
        self.value = value;

    }
}

//sll all consist of the first node -> self.head

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(6);
secondNode = new Node(9);

console.log(firstNode.next);
firstNode.next = secondNode
console.log(firstNode.next);
thirdNode = new Node(14);
fourthNode = new Node(17);

secondNode.next = thirdNode;

thirdNode.next = fourthNode;

//console.log(firstNode);

class SLL{
    constructor(node){
        this.head = node;
    }
    view(){
        let runner = this.head;
        while(runner){

        }
    }
}

firstSLL = new SLL(firstNode);

console.log(firstSLL);