let todos = [
    { createdAt: "2080-09-09", name: "html", status: "completed" },
    { createdAt: "2080-09-08", name: "css", status: "completed" },
    { createdAt: "2080-09-07", name: "js", status: "completed" }, // TODO: change this status to pending
  ];

/* yo mathi ko lai function mah convert garni  */

// console.log(todos[0].name + "is" + todos[0].status)   // wrong way to do 


function printStatus(index){

  let name = todos[index].name
  let status = todos[index].status
  console.log(`${name} is ${status} for index :${index}`)
}

printStatus(0) // 0 is argument 
printStatus(1) // 1 is argument
printStatus(2)

/* funtion
       -reusable 
*/
function printTodoStatus(todos){
  console.Log(`${todos.name} created at ${todos.createdAt} is ${todos.status}`)
}

printTodoStatus(todos[0])   //printTodoStatus 