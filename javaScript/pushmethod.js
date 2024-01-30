let todos = [
  {
    title: "variable",
    status: "completed",
    createAt: "2024-01-03",
  },
  {
    title: "array",
    status: "completed",
    createAt: "2024-01-05",
  },
  {
    title: "object",
    status: "pending",
    createAt: "2024-01-07",
  },
  {
    title: "loop",
    status: "pending",
    createAt: "2024-01-09",
  },
  {
    title: "function",
    status: "pending",
    createAt: "2024-01-10",
  },
];


let completedTodos =[];  // khali array banako 
let pendingTodos = [];
for(let index = 0; index<todos.length; index++){
    let ourTodo = todos[index];  // ourTodo and todos[index] lai same banako sajilo ko lagi feri feri code lekhnu vanda yesto gareko ramro 
    if(ourTodo.status == "completed"){
        completedTodos.push(ourTodo)  // mathi ko completedTodos khali mah push gareko ko new array or todos ko array lai 
    }else(
        pendingTodos.push(ourTodo)
    )
}
console.log(completedTodos); // [ ]
console.log(pendingTodos);
