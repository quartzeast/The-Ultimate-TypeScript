// OOP is all about objects. 为了创建一个对象，我们需要创建一个类。
// A class is a blueprint for creating objects.
// PascalCase

/* 
  迭代 1
    class Account {
      id: number;
      owner: string;
      balance: number;
    }

    Property 'balance' has no initializer and is not definitely assigned in the constructor.

    为了解决这个问题，需要使用 Construtor，Constructor 是类中的一个特殊函数或方法，用于初始化一个对象，构造器不需要
    返回类型，因为它永远返回这个类 类型的对象。

  迭代 2
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
*/
