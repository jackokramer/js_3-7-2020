class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(6);
secondNode = new Node(17);

console.log(firstNode);

firstNode.next = secondNode;

console.log(firstNode.next);

class SLL{
    constructor(node){
        this.head = node;
    }
}

firstSll= new SLL(firstNode);

console.log(firstSll);