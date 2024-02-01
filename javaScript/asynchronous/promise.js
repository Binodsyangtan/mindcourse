/* asynchronous */


 /* Promise real life promise jhai hunxa kura fullfilled gare matra result dinxa natra peding vanera output aauxa */
let promise1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("user data fetched")
        
    }, 3000)
  
})
console.log(promise1)

/* settime lagaya matra hunna after 3 sec hamro kam pura vako xa tara output mah dekhaya tesko lagi .then use garni ani dekhauxa */
promise1.then((response) =>{
    console.log("response", response)
})