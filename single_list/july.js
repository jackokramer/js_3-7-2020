class Node{
    constructor(value){
        this.value =value;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.head = null;
    }
    addFront(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head == newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    removeFront(){

    }
    contains(){
        let runner = this.head;
        while(runner != null) {
            if(runner.value == value){
                return true
            }
            runner = runner.next;
        }
        return false;
    }
}

let my_list = new SLL();
my_list.addFront(8).addFront(11);
let x = my_list.removeFront(9);
console.log(my_list);