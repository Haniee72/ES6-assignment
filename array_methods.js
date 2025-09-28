let numbers = [1, 2, 3, 4, 5];

//Map to create new array to double numbers
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

//Filter to print only even numbers
let evenNums = numbers.filter(num => num % 2 == 0);
console.log(evenNums);

//Reduce by adding all numbers together
let numSum = numbers.reduce((total, num) => total + num, 0);
console.log(numSum);

//forEach to print each number
let collected = [];
numbers.forEach(num => collected.push(num));
console.log(collected);

//find first number greater than 3
let found = numbers.find(num => num > 3);
console.log(found);

