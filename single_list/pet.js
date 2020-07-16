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
/*secondNode = new Node(9);

console.log(firstNode.next);
firstNode.next = secondNode
console.log(firstNode.next);
thirdNode = new Node(14);
fourthNode = new Node(17);

secondNode.next = thirdNode;

thirdNode.next = fourthNode;
*/

//console.log(firstNode);

class SLL{
    constructor(node){
        this.head = node;
    }
    view(){
        let runner = this.head;
        let count = 1
        while(runner){
            console.log(`You are on node ${count}, its value is: ${runner.value}`)
            runner = runner.next;
            count += 1;
        }
        return this
    }
    addFront(value){
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        console.log(`a new node ${value} has been added to the front of the list`)
        return this
    }
    addBack(value){
        // find the end of the list... and add null with the new node
        let runner = this.head;
        while(runner.next){
            console.log(`this is the current value: ${runner.value}, this is the next node ${runner.next}`)
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this
    }
}

firstSLL = new SLL(firstNode);

console.log(firstSLL);

firstSLL.view().addFront(5).addFront('hi').addFront(11).addFront(23).addBack('Hi').addBack(99).addFront('Front World').view();
