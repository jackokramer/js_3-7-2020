//Set 2

class listNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class singleList{
    constructor(){
        this.head = null;
    }

//List: Contains
//Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
    contains(value){
        let val = new listNode;
        if(this.head = value || this.next){
            return val;
        } else {
            return null;
        }
    }

 // SList: Length
//July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

// SList: Display
//Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

}