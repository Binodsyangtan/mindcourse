let number = [1, 2]

number.push(3)  //[1,2,3]
number.push(4)  //[1,2,3,4]
console.log(number)


function doubleTheArray(arr){
    // arr = [1,2,3];
    let result = [];
    for(let index = 0; index < arr.length; index++){
        result.push(arr[index]*2)
        
    }
    return result;
}

let newArray = doubleTheArray([1,2,3])
console.log(newArray)