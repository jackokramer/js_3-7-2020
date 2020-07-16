/* classes have attributes an metjods

// nodes have the value it contains and -> next

sinlgly linked lists only track the first node. used for queues*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/*
nodeOne = new Node(7);

nodeTwo = new Node(10);

console.log(nodeOne, `this is my new node Object`)

console.log(nodeOne.value, `this is the nodes value`, nodeOne.next, `this is what's next`)
*/
// create a class SLL

class SLL{
    constructor(value){
        this.head =  new Node(value);
    }
    addback(value){
        // adds a node to the end of the list
        if(this.head == null){
            this.head = new Node(value);
        } 
        let runner  = this.head;
        while(runner.next){ // while there is a node next to runner
            runner = runner.next
        }
        runner.next = new Node(value) // adds node to the back
        return this
        //find the end of the linked list
    }
    display(){ // doesn't need any parameters
    // remember the runner
        let runner = this.head
        let count = 1;
        while(runner){
            console.log(`this is current node ${count} conatianing value ${runner.value} next is ${runner.next}`)
            runner = runner.next
            count++
        }
        return this
    }
    addFront(value){
        let restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    searchNode(value){
        //traverse through a list looking for a value.
        let runner = this.head;
        while(runner){
            if(runner.value == value){
                return true;
            }
            runner= runner.next; // need to put this here or its an infinite loop
        }
        return false;
    }
    maxMinAvg(){ // no parameters here
        let num_Of_Nodes = 0
        let returnObj = {
            'max': this.head.value,
            'min': this.head.value,
            'avg': 0
        }
        let runner = this.head;
        while(runner){
            num_Of_Nodes++
            if(runner.value > returnObj['max']){
                returnObj['max'] = runner.value;
            } if(runner.value <returnObj['min']){
                returnObj['min'] = runner.value;
            }
            returnObj['avg'] +=runner.value;
            runner = runner.next
        }
        returnObj['avg'] = returnObj['avg']/num_Of_Nodes
        return returnObj
    }
}

firstSLL = new SLL(7);

console.log(firstSLL, `this is my first SLL with Node one`)

firstSLL.addback(9).addback(12).addback(17).addFront(4);

console.log(firstSLL, 'After testing add back')
console.log(firstSLL.searchNode(100));
console.log(firstSLL.searchNode(17));

firstSLL.display()

console.log(firstSLL.maxMinAvg())