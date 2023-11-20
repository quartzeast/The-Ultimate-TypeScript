/*
  // 访问修饰符：public, private, protected
  // 所有的属性默认都是 public，所以不需要使用 public 修饰符通常
  // private: 只在类中可访问，私有的属性通常以 _ 开头
  class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
      this.id = id;
      this.owner = owner;
      this._balance = balance;
    }

    private calculateTax() {}

    deposite(amount: number): void {
      if (amount <= 0) throw new Error('Invalid amount');
      // Record a transaction
      this._balance += amount;
    }

    getBalance(): number {
      return this._balance;
    }
  }
*/
