let todosApiData = {
    data: {
      todos: [
        { title: "html", status: "completed" },
        { title: "css", status: "completed" },
        { title: "js", status: "completed" },
      ],
    },
  };


/* string literal or template litreal */

/* + use garera add string add garnu vanda we can use back tick (tab ko mathi ) $ use garera use garni  */
  let firstName = "hari";
  let lastName = "bdr";
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName)



/* Function */

function add(a,b) {
    console.log(a+b);
    
}
add(1,2)
add(2,2)
add(3,10)
add(5,4)



/**
 * this function calculates sum of two number
 * @parameter number input1
 * @parameter number input1
 */

/* group - fucntion */

function calculatesum(input1, input2){
    console.log(`${input1} + ${input2} = ${input1 + input2}`)
}
calculatesum(100,200)  // function call gareko
calculatesum(2,2)  
calculatesum(4,12)  


function calculateminus(a, b){

    console.log(`${a} - ${b} = ${a - b}`)
}
calculateminus(5,2)
calculateminus(200,50)
calculateminus(100,3)