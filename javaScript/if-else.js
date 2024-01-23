/* if else

    nested conditions
    nested if else

*/

let willRain = false;
let hasProbability = false;
if(willRain){
    console.log("take umbrealla");
}else{
    if(hasProbability){
        console.log("you might need it.");
    }else{
        console.log("no need");
    }
}


/* short curt nested if else */

if(willRain){
    console.log("take umbrealla");
}else if(hasProbability){
    console.log("you might need it.");
}else{
    console.log("no need");
    
}





let student = {
    name: "ram",
    paidstatus: true,
    hasScholorship: false,
}

if(student.paidstatus){
  console.log("ram can give exam")
}
else if(student.hasScholorship){
        console.log("ram can enroll exam")
}else{
        console.log("ram cannot enroll exam");
    }

    
 


function getMonth(month){
    if(month == 1){
        return "jan"
    } else if(month == 2){
        return "feb"
        
    }else if(month == 3){
        return "march"
    }
    else if(month == 13){
        return "undefined"
    }
    

}


console.log(getMonth(1));   //jan
console.log(getMonth(2));   //jan
console.log(getMonth(3));
console.log(getMonth("other-data"));
  
// console.log(getMonth(12));   //dec
// console.log(getMonth(13));   //invalid