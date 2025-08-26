let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function(type, amount) {
        this[type]+=amount
    },
    removeExpense: function(type, amount) {
        this[type]-=amount
    },
    printMonthlyReport : function() {
        console.log(`Suv uchun oylik xarajat:${this.water}`)
        console.log(`Gaz uchun oylik xarajat:${this.gas}`)
        console.log(`Elektr energiyasi uchun oylik xarajat:${this.electricity}`)
	}
};


Expenses.addExpense('water',14000)
Expenses.addExpense('gas',25000)
Expenses.addExpense('electricity',55000)
Expenses.removeExpense('electricity',25000)
console.log(Expenses.printMonthlyReport())




