// creating data structures from scratch. Showing that I can do my own data structure and not relying on pre built stuff. Written as class methods
// nodes hold two pieces of information a value and a next that serves as a pointer to another node until it reaches null/nothing
// Singley linked list has a list of nodes that adds up to a position in out list. Head is the front

class Node {
    constructor(val){
        this.value =val;
        this.next = null;
    }
}

// above looks like a data structure. node -> node -> node -> null


class SLList{
    constructor(){
        this.head = null;
    } //all class methods go here.
    addFront(val){
        var newNode =  new Node(val);
        if(this.head == null){
            this.head = newNode; // the position at this.head holds the newNode object
            return this;
        }
        newNode.next = this.head; // pointer for new node now goes to the node located at  this.head
        this.head = newNode;
    }
    legnth(){
        var count = 0;
        var runner = this.head; //the variable runner is now set to the same node that exisits at the this.head
        while(runner != null){
            count++;
            runner = runner.next;
        }
        return count;
    }
}

var mylist = new SLList();
console.log(mylist);
mylist.addFront(5);
mylist.addFront(30);
mylist.addFront(17);
mylist.addFront(49);
console.log(mylist);
console.log(mylist.legnth());
// {empty list where head = null}

//addFront jack isn't nice he cuts in line and people should tell him not to do that.

//LENGTH - create a function that accepts a parent list the first list node, and returns the number of nodes in that Slist. Looking for a condition.

