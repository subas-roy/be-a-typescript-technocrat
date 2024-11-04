{
  // getter and setter
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount
    }

    // getBalance() {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance
    }

  }

  const goriberAccount = new BankAccount(111, "Mr Gorib", 20)
  // goriberAccount.AddDeposit(100) // need to call function
  // const balance = goriberAccount.getBalance() // need to call function
  // console.log(balance)

  goriberAccount.deposit = 50; // add using setter
  const myBalance = goriberAccount.balance // get using getter
  console.log(myBalance)


  //
}