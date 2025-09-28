//Spread with arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log(combined);

//Spread with objects
let person = {name: "Ritz"};
let personWithAge = { ...person, age: 35};
console.log(personWithAge);