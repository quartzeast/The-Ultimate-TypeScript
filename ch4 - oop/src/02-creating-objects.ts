/*
  class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
      this.id = id;
      this.owner = owner;
      this.balance = balance;
    }

    deposite(amount: number): void {
      if (amount <= 0) throw new Error('Invalid amount');
      this.balance += amount;
    }
  }

  let account = new Account(1, 'Mosh', 0);
  account.deposite(100);
  console.log(account.balance);
  console.log(account);
  console.log(typeof account); // object
  console.log(account instanceof Account); // instanceof 用于检测某个对象是否是一个类的实例
*/
