// Classes - Blueprints for creating objects.
// Interfaces - To define the shape of objects.
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// 接口 vs 抽象类
// 如果有一些代码或逻辑需要在子类中共享，则使用抽象类，否则使用接口能保证代码的简洁性

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }

  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
