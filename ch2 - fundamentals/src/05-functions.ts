function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 0.2;
  return income * 0.3;
}

// noUnusedParameters
// noImplicitReturns
// noUnusedLocals
// 给参数设置为可选的 taxYear?: number
// 给参数设置默认值 taxYear = 2022
