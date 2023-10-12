// named function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 3));

//function expression
let mul = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mul(2, 3));

//arrow functions
let sub = (num1: number, num2: number): number => {
  return num1 - num2;
};

console.log(sub(2, 3));

//optional parameter
let optionalParam = (a: number, b: number, c?: number): number => {
  return c ? a + b + c : a + b;
};

console.log(optionalParam(2, 3));
console.log(optionalParam(2, 3, 5));

//spread operator
let spreadOperator = (a: number, b: number, ...c: number[]): number => {
  return a + b + c.reduce((a, b) => a + b);
};

console.log(spreadOperator(10, 20, ...[10, 20]));
console.log(spreadOperator(10, 20, 10, 20, 30));
