const nepaliNames = ["Aarav", "Aarya", "Asha"];

for (let index = 0; index < nepaliNames.length; index++) {
  let element = nepaliNames[index];
  console.log(element, index);
}
/* short cut */
const doSomething = () => {
    console.log("do something");
};
nepaliNames.forEach(doSomething)

const printElement = (element) => {
    console.log(element);
};
 nepaliNames.forEach(printElement)  // forEach is only use in array as a for loop

/* example of forEach funtion */

 let numbers = [1,2,3,4,5]
 numbers.forEach((element) => {
    console.log(element)   //hamile element variable banairakhnu pardaina funtion ho so k rakhe ni hunxa parameter mah 
 })




const showPopup = () => {
  console.log("show popup");
};

/* callback funtion
    -a funtion passed as an arguement to another funtion.
*/
setTimeout(showPopup, 3000);

/* anynomous funtion */

setTimeout(() => {
  console.log("show again");
}, 5000);
