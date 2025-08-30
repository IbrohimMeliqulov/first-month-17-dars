class BankAccount{
    constructor(ownerName,balance,accountNumber){
        this.ownerName=ownerName
        this.balance=balance
        this.accountNumber=accountNumber
        this.balance=0
    }
    deposit(quantity){
        this.balance+=quantity
        // console.log(this.balance)
    }
    withdraw(quantity){
        this.balance-=quantity
        // console.log(this.balance)
    }
    showbalance(){
        console.log(this.balance)
    }
}


person=new BankAccount("Ali",accountNumber=451636211424)
person.deposit(98000)
person.withdraw(45000)
person.showbalance()


person1=new BankAccount("Vali",accountNumber=451763366469)
person1.deposit(145000)
person1.withdraw(150000)
person1.showbalance()