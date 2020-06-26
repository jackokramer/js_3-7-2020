// Arrays are more difficult to delete things than a singly linked list

/*
Arrays and Sinlge linked lists are both impleentation of the same abtract type. The difference is how data is stored

linked lists have no random access or indices.
*/

// implment a linked list node class
class Node{
    constructor(val, next=null){
        this.val = val;
        this.next = next; // points to nothing now
    }
}

let node1 = new Node(7);
let node2 = new Node(9);
node1.next= node2;
console.log(node1);

// implment the list class
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Add Node
    add(val){
        let newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            console.log(`added! ${val}`)
        }
        this.size++;
    }
    display(){
        let x = 0; 
        let current = this.head;
        let string = ""
        while (current){
            string += x +'. ' + current.val + " ";
            current = current.next;
            x++;
        }
        console.log(string);
        this.size++
    }
    //add front
    addFront(val){
        if(this.head === null){
            this.head = new Node(val)
        } else{
            let temp = this.head;
            this.head = new Node(val);
            this.head.next = temp;
        }
        this.size++
    }
    //remove front
    removeFront(){
        if(this.head === null){
            return 'list is empty'
        } else{
            this.head = this.head.next;
        }
    }
    insertAt(val, index){
        if(index>0 && index>this.size){
            console.log(`index is out of range`);
            return ;
        }
        let newNode = new Node(val);
        let current = this.head;
        let prev;
        if(index ===0){
            newNode.next = head;
            this.head = newNode;
        } else{
            current = this.head;
            let position = 0;
            while(position<index){
                position++;
                prev = current;
                current = current.next;
            }
            newNode.next = current;
            prev.next = newNode;
        }
        this.size++;
    }
    maxMinAvg(){
        let sum = 0;
        let max = this.head.value;
        let min = this.head.value;
        let runner = this.head;
        while(runner){
            sum += runner.val;
            if(runner.val>max){
                max=runner.val;
            }
            else if(runner.value < min){
                min = runner.value;
            }
            runner = runner.next;
        }
        return `${max}, ${min}, avg:${sum/this.length()}:`
    }
}

let list = new LinkedList();
list.add(4)
list.add(6)
list.add(9);
list.display();
list.addFront(99);
//list.display();
//list.removeFront();
list.display();
list.insertAt(89, 1);
list.display();