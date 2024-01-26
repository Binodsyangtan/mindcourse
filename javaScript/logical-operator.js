/* Logical operator 

    OR || 
        -if one of the condition is true
         then it give true output always
    AND &&
        -for AND both condition need to be true
          otherwise it will give false output vise versa
    NOT !
        -opposite (if ture then NOT sign give false output vise versa)

*/

let student = {
    name: "name",
    paidStatus: true,
    hasScholarship: true,
    fullfillAttendence: false,
};

let{paidStatus,hasScholarship,fullfillAttendence} = student  /* object destructuring  */

if((paidStatus || hasScholarship) && fullfillAttendence){  //for 3 condition we need to give bracket() for which condition need to be compare fist 
    console.log("he can enroll")

}else{
    console.log("he cannot enroll")
}



/* 
console.log(sum(1,2))   // 3
console.log(sum(1,2,4))   // 3
console.log(sum(1,2,2,19.33))   // 3

*/

function sum(input1, input2, ...rest){  //rest vaneko baki ko jasley array ko use garxa 
    return input1+rest
}
console.log(sum(1,2,3,4))

/* arrow function use garne aba bata */

const sum = (input1.input2) => {
    return input1+input2
}
console.log(sum(1,2))