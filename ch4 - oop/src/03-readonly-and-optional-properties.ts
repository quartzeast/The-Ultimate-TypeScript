/*
  class Account {
    readonly id: number; // 给属性添加 readonly 修饰符后，只能在 constructor 中修改
    owner: string;
    balance: number;
    nickname?: string; // optional，可以不用初始化

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
*/
