class listNode{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class singleList{
    constructor(){
        this.head = null;
    }
    //List: Add Front
    //Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.
    addfront(value){
        let node = newNode(value);
        node.next=this.head;
        this.head = node;
        return this;
    }
    //List: Remove Front
    //Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.
    removeFront(){
        if (this.head != null){
            this.head = this.head.next
        }
        return this;
    }
    //List: Front
    //Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.
    front(){
        if(this.head == null){
            return null
        }
        return this.head.value;
    }
}
