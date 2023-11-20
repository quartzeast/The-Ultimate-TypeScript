// 使用空值对象时，通常要做空值检查（null checking）
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday?.getFullYear()); // 只有当 customer 不是 null 或 undefined 时，才会访问 birthday 属性

// Optional element access operator
// customer?.[0]

// Optional call operator
// log?.()
