class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new Node(6);
//secondNode = new Node(10);

//console.log(firstNode);

/*firstNode.next =  secondNode;
thirdNode = new Node(9);
fourthNode = new Node(17);
secondNode.next = thirdNode;
thirdNode.next =fourthNode;
console.log(firstNode.next);
console.log(firstNode);
*/
class SLL{
    constructor(node){
        this.head = node;
    }
    view(){
        let runner = this.head;
        let count = 0;
        while(runner){
            console.log(`you are on Node: ${count}, it's value is ${runner.value}`)
            runner = runner.next;
            count +=1; // makes it count
        }
        return this
        //this.head // piunter to the first node
    }
    addFront(value){
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        console.log("A new node has been added to the front")
        return this;
    }
    addBack(value){
        //find end of the list
        // add node
        let runner = this.head;
        while(runner.next){
            console.log(`this is the current: value ${runner.value}, this is the next node: ${runner.next}`)
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this;
    }
}

firstSLL = new SLL(firstNode);

//console.log(firstSLL);
firstSLL.view().addFront(10).addFront(12).addFront(14).addFront(22).view().addBack('sup').view();