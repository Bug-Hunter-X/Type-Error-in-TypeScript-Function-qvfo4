function add(a: number, b: number): number {
  return a + b;
}

let result1 = add(5, 10); // Correct: both arguments are numbers

let numStr: string = '10';
let result2 = add(5, parseInt(numStr)); // Correct: string converted to number using parseInt()

//Alternative method: Type Guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) return a+b;
  else throw new Error('Invalid input: Both arguments must be numbers');
}
let result3 = addSafe(5, '10'); //Throws error
let result4 = addSafe(5, 10); // returns 15