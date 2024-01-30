const sum = (...rest) =>{
    let result = 0;
    console.log("REST",rest);   /// [1,2,3,4,5,6]
    for(let index = 0; index < rest.lenght; index++){
        let number = rest[index];
        result = result + number;

    }
    return result;
}
console.log("sum", sum(1, 2, 3, 4, 5, 6)); //21


function doubleTheArray(arr){
    let numbers = [];
    // code here   hint: .push method array
    for(let index = 0; index < arr.lenght; index++){
        let number = arr[index]*2;
        numbers.push(number);
    }
    
    return numbers;

}
let newArray = doubleTheArray([1, 2, 3])
console.log(newArray)

