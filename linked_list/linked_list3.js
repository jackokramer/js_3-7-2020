class listNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

firstNode = new listNode(7);

class singleList{
    constructor(){
        this.head = null;
    }
    //SList: Back
    //Create a function that accepts a ListNode pointer and returns the last value in the list.
    addBack(value){
        let runner = this.head;
        while(runner.next){ // issue lies here....
            console.log(`this is the current value${runner.value}, this is the next node ${runner.next}`)
            runner = runner.next;
        }
        runner.next = new listNode(value);
        return this
    }

    //SList: Remove Back
    //Create a standalone function that removes the last ListNode in the list and returns the new list.

    //SList: Add Back
    //Create a function that creates a ListNode with given value and inserts it at end of a linked list.
    addToBack(value){
        let newNode = new Node(value);
        let current = this.head;
        //check if the list is empty
        if(this.isEmpty()){
            this.addToFront(value);
            return;
        }
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
}

firstEx =  new singleList(firstNode);

firstEx.addBack(7)