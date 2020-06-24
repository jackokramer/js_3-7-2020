/* PYTHON EXAMPLE
class bankAcount:
    def __init__(self, int_rate = 0; balance =0):
        self.int_rate=int_rate
        self.balance=balance
    def deposit(self, amount):
        self balance += amount
        return self
ba1 = BankAccount(balance = 100) // instance of an object
ba2 = BankAccount(balance =100) // second instance 
ba1.deposti(100)
*/

// es6 JavaScript Example

class BankAccount{
    constructor(intRate= 0, balance=0){
        this.intRate= intRate;
        this.balance = balance;
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`${amount} has been added to your account`)
        //return this;
    }
}

let bankAcount1 = new BankAccount(.08, 200);
console.log(bankAcount1.balance);
bankAcount1.deposit(700);
console.log(bankAcount1.balance);