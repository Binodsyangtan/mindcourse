let numbers = [1, 2, 3, 4, 5, 6, 7];

/* same kura harulai short form mah lekhya */
/*  if single parameter xa vane no need bracketso direct garda hunxa */
let evenNumber = numbers.filter(index => index%2 == 0)
console.log(evenNumber)
let oddNumber = numbers.filter(index => index%2 !== 0)
console.log(oddNumber)

let doubleNumber = numbers.map(el => 2*el)
console.log(doubleNumber)

