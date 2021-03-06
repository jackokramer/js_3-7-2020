// implement a linked list nOde class
class node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

/*let n1 = new node(4);
let n2 = new node(18);
let n3 = new node(30);
console.log(n1);
n1.next = n2;
console.log(n2);
console.log(n3);
*/
// implement the list class
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val){
        const newNode = new node(val);
        if(this.head == null){
            this.head = newNode;
            console.log(`added ${val} as the head of the list`)
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
            console.log(`added ${val}`)
        }
        this.size++;
    }
    display(){
        let x = 0;
        let current = this.head;
        let string = '';
        while(current){
            string+=1; '. '+ current.val + '';
            current = current.next;
            x++
        }
        console.log(string);
    }
//add frony
    addFront(val){
        if(this.head == null){
            this.head = new node(val)
        } else{
            let temp = this.head;
            this.head = new node(val);
            this.head.next = temp;
            console.log(`added! ${val}`)
        }
        this.size ++;
    }
//remove front
    removeFront(){
        if(this.head === null){
            return 'list is empty';
        } else {
            this.head = this.head.next;
        }
    }

//INSERT AT
    insertAt(val, index){
        if(index > 0 && index>this.size){
            console.log('this index is out of range.');
            return;
        }
        let newNode = new node(val);
        let current = this.head;
        let prev;
        if(index === 0){
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
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.addFront(88);
list.display();
//list.removeFront();
//list.display();
list.insertAt(99,1);
list.display();


// add node/ add node to the end