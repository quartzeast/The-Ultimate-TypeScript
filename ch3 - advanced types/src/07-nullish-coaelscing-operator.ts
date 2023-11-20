// 当使用 null 或 undefined 时，某些时刻我们要 fall back（回退）到某个默认值

let speed: number | null = null;
let ride = {
  // Falsy (undefind, null, '', false, 0)
  // speed: speed || 30, 老方法当 speed 为 Falsy value 时，则采用 30 作为 speed 的值
  // 但是 Falsy value 有五个，如果 0 对 speed 是合法的值呢？因为速度是绝对可能为 0 的对吧
  // 如果用户输入了 0，那么 0 就会被忽略，speed 就变成 30 了，这显然不对，所有就需要 nullish-coaelscing-operator
  speed: speed ?? 30, // 如果 speed 的值不是 null 或 undefined，则使用这个值，否则使用 30 作为默认值
};
