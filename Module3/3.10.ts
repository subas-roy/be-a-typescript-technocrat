{
  // Encapsulation in OOP

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

    private getBalance() {
      return this._balance;
    }

    gethiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test(){
      this._balance // accessing private properties of parent class
      this.gethiddenMethod() // accessing private 
    }
  }

  const goriberAccount = new BankAccount(111, "Mr Gorib", 10000)
  // const balance = goriberAccount.getBalance()
  // console.log(balance)
  console.log(goriberAccount.gethiddenMethod())


  //
}