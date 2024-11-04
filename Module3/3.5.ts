{
  // access modifiers --public(by default), readonly, private, protected
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test(){
      this._balance
    }
  }

  const goriberAccount = new BankAccount(111, "Mr Gorib", 10000)
  const balance  =goriberAccount.getBalance()
  console.log(balance)

  




  //
}