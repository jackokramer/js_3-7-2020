class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(6);
//secondNode = new Node(17);

//console.log(firstNode);
//firstNode.next = secondNode;

//thirdNode = new Node(39);
//fourthNode = new Node(29);

//secondNode.next = thirdNode;
//thirdNode.next = fourthNode;

console.log(firstNode.next);

class SLL{
    constructor(node){
        this.head = node;
    }
    view(value){
        let runner = this.head;
        let count = 0;
        while(runner){
            console.log('You are on node: ${count}, its value is : ${runner.value}')
            runner = runner.next;
            count+= 1;
        }
        return this;
    }
    addFront(value){
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        console.log('A new node had been added to the list')
        return this
    }
    addBack(value){
        //find end of the list
        // add node
        let runner = this.head;
        while(runner.next){
            console.log('this is the current value:${runner.value}, this is the next node: ${runner.next}')
            runner = runner.next
        }
        runner.next = new Node(value);
    }
}

firstSll= new SLL(firstNode);

firstSll.view().addFront(2).addFront(10).addFront('Hei').addFront(53).addBack("run forward");

console.log(firstSll);

firstSll.addBack();