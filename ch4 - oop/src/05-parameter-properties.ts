/*
  class Account {
    nickname?: string;

    constructor(
      public readonly id: number,
      public owner: string,
      private _balance: number
    ) {}

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
