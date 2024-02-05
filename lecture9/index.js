function cal(a, b, c, d = 1) {
  console.log(d);
  let sum = a + b;
  let multiplier = c * d;
  let result = sum + multiplier;
  return result;
}

let ans = cal(1, 2, 3, 2);
console.log(ans);
// console.log(cal(5,10,5,10))
// console.log(cal(5,20,5,2))
