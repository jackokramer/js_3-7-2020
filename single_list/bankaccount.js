/*class bankAccount:
def __init__(self, int_rate=0, balance=0)
    self.int_rate= int_rate
    self.balance = balance

def deposit(self, amount):
    self.balance +=amount
    return self

ba1 = bankAccount(balance=100)
ba2 = bankAccount(balance=200)*/
//ba1.deposit(100)

class bankAccount{
    constructor(intRate = 0, balance=0){
        this.intRate= intRate;
        this.balance= balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${amount} has been added to your account!`)
        //return this;
    }
}

let bank1 = new bankAccount(0.08, 200);
console.log(bank1.balance);
bank1.deposit(500);
console.log(bank1.balance);