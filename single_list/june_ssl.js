/*
class BankAccount:
    def __init __(self, int_rate=0, balance = 0);
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdrawl(self, amount):
        self.balance -= amount
        return self
ba1 = BankAccount(balance=100)
ba2 = BankAccount(balance=800)
ba1.deposit(900)
ba2.withdrawl(200)
*/

class bankAccount{
    constructor(int_rate = 0, balance = 0){
        this.int_rate= int_rate;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${amount} has been added to your account`)
    }
    withdral(amount){
        // check and see if balance is greater than the amount
        if(this.balance>=amount){
            this.balance -= amount;
        } else {
            this.balance -= 5;
            console.log('insufficient funds')
        }
        console.log(`${amount} has been removed from your account`)
    }
    displayAccountInfo(){
        console.log(`Balance: ${this.balance}`);
    }
    yeildInt(){
        if(this.balance >0);
            this.balance = this.balance + this.balance * this.int_rate
        return this
    }
}
/*
let bankAccount1 = new bankAccount(0.08, 200);
console.log(bankAccount.balance);
bankAccount1.deposit(978);
console.log(bankAccount1.balance);
bankAccount1.withdral(700)
console.log(bankAccount1.balance);
*/

/*
== vs. ===

OOP Refresher
Prototypes
ES6 syntax
Singly Linked lists
*/

class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}


//Implement Node Class

let n1 = new Node(6);
let n2 = new Node(9);
n1.next = n2;

console.log(n1);

//Implement the List Class

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            console.log(`added ${val} as the head of the list`)
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            console.log(`added ${val}`)
        }
        this.size++;
    }
// Dsiplay List

    display(){
        let x = 0;
        let current = this.head;
        let str = '';
        while(current){
            str += x + '  ' + current.val + " ";
            current = current.next;
            x++
        }
        console.log(str);
    }
    ////Add  Front Node 
    addfront(val){
        if(this.head === null){
            this.head = new Node(val)
        } else {
            let temp = this.head;
            this.head = new Node(val);
            this.head.next = temp;
            console.log(`Added ${val}`)
        }
    }
// remove Front
    removeFront(){
        if(this.head === null){
            return 'list is empty';
        } else{
            this.head = this.head.next;
        }
    }
// insert At
    insert(val, index){
        if(index > 0 && index > this.size){
            console.log('index is out of range');
            return;
        }
        let newNode = new Node(val);
        let current = this.head;
        let previous;
        if(index === 0){
            newNode.next = head;
            this.head = newNode;
        } else { // where the fun lies
            current = this.head;
            let position = 0;
            while(position < index){
                position++;
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
}

let list = new linkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.addfront(88);
list.display();
list.removeFront();
list.display();
list.insert(99, 2);
list.display();

// Add Node to the End

