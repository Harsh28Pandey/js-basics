// ? Problem 2: Create a BankAccount class with methods to deposit, withdraw, and display balance.

class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log('Deposit amount must be greater than zero');
            return;
        }
        this.balance += amount; // this.balance = this.balance + amount
        console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log('Withdrawal amount must be greater than zero');
            return;
        }

        if (amount > this.balance) {
            console.log('Insufficient funds for withdrawal');
            return;
        }

        this.balance -= amount; // this.balance = this.balance - amount
        console.log(`Withdraw: ${amount}, New Balance: ${this.balance}`);
    }

    displayBalance() {
        console.log(`Current Balance: ${this.balance}`);
    }
}

// usage
const myAccount = new BankAccount(100);
myAccount.displayBalance();

myAccount.deposit(50);
myAccount.withdraw(30);

myAccount.withdraw(200);
myAccount.deposit(-1);

myAccount.displayBalance();