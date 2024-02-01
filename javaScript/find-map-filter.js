let numbers = [1, 2, 3, 4];

/* map method bata gareko yo */
let doubleNumber = numbers.map((n) => 2 * n);

console.log(doubleNumber);

/* triple number gareko yo chai  */
let tripleNumber = numbers.map((n) => 3 * n);
console.log(tripleNumber);

/* forEach bata gareko yo  */
let doubleNumbers = [];
numbers.forEach((el) => doubleNumbers.push(2 * el));

console.log(doubleNumbers);

const nepaliNames = ["Aarav", "Aarya", "Asha", "Anisha"];

let dummyUsers = nepaliNames.map((el, index) => ({
  name: el,
  email: `${el.toLowerCase()}@gmail.com`,
  password: `${el.toLowerCase()}${index}`,
}));

console.log(dummyUsers);

/* filter method use gareko example */

let wholeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 12, 11];
let evenNumber = wholeNumbers.filter((n) => n % 2 == 0);

console.log(evenNumber);
