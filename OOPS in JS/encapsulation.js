//? Encapsulation - Hide implementation details and expose only necessary parts.
class BankAccount {
    #balance = 0; // private property

    deposit(amount) {
        this.#balance += amount; // this.balance = this.#balance + amount
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// account.#balance; // error