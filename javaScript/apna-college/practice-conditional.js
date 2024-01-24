// prompt is a method to take input from user 


// let name = prompt("hello");
// console.log(name);
/* apna-college conditional statemnet question no 1 */


let num = prompt("enter a number:")
if(num % 5 === 0){ /* num % 5 remainder 0 aayo vane 5 le direct multiple hunxa */
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not multiple of 5")
}


/* write a code which can give grades to students sccording to their scores:
90-100, A
70-89, B
60-69,C
50-59,D
0-49,E

*/

let scores = prompt("enter a scores")
if(scores >=90 && scores <= 100){
    console.log("student grade is A")
}else if(scores <=89 && scores >= 70){
    console.log("student grade is B");
}else if(scores <= 69 && scores >= 60){
    console.log("student grade is C")
}
else if(scores <= 69 && scores >= 60){
    console.log("student grade is D")
}
else if(scores <= 59 && scores >= 50){
    console.log("student grade is E")
}
else if(scores <= 49 && scores >= 0){
    console.log("student grade is F")
}