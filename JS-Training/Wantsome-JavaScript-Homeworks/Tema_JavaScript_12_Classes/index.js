//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu

class Account {
    constructor (name,location) {
        this.name = name;
        this.location = location;
    }
}

class Transaction {
    constructor (sender,bank,amount,reference) {
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }

    get finalSum() { return this.comission(); }
    comission() {
        return (this.amount - 10);
    }
}

class Table {
    constructor (transactions) {
        transactions = []
        this.transactions = transactions;
    }

    addTransaction(transaction) {
        return this.transactions.push(transaction);
    }
}

const bankAccount = new Account("Victor","Iasi");
console.log(bankAccount);
const transaction1 = new Transaction("Wantsome","ING",1280,"Partial payment number 1");
console.log(transaction1);
console.log(transaction1.finalSum);
const transaction2 = new Transaction("Wantsome","ING",1280,"Partial payment number 2");
console.log(transaction2);
const table = new Table();
console.log(table)
table.addTransaction(transaction1);
table.addTransaction(transaction2);
console.log(table)