/**
 * 补充.00尾巴

```
 输入          输出
 1      =>    1.00
 1.0    =>    1.00
 1.00   =>    1.00
 ```
 */
const padZeroTail = (val: number | string) => {
  const stringVal = val.toString();
  const result = stringVal.padEnd(stringVal.length + 3, ".00");
  return result;
};

// console.log(padZeroTail(1));
// console.log(padZeroTail(0.1));
// console.log(padZeroTail(111));
// console.log(padZeroTail("111.0000"));

export { padZeroTail };
