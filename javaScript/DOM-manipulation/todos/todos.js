let todos = [];

function addTodo(event) {
  /* hamle le html mah onsubmit event add garyou so listeer le chai listen garxa and preventDefault function le default banauxa and page refresh hunna when we add something */
  event.preventDefault();
  // console.log("add-new-todo");
  let input = document.getElementById("input-title").value;
  // console.log("add", input)
  todos.push(input);

  let outputlist = "";

  todos.forEach((input, index) => {
    outputlist += `<li>${input} <button onclick="deleteTodo(${index})">delete</button></li> `
  });
  /* delete garda only jun delete garni tyo matra delete hunu paryou */

  console.log(outputlist);
  document.getElementById("todos-list").innerHTML = outputlist;
};

function deleteTodo(deletableindex){
  todos = todos.filter((el,index) => index != deletableindex)


  let outputlist = "";

  todos.forEach((input, index) => {
    outputlist += `<li>${input} <button onclick="deleteTodo(${index})">delete</button></li> `
  });
  /* delete garda only jun delete garni tyo matra delete hunu paryou */

  console.log(outputlist);
  document.getElementById("todos-list").innerHTML = outputlist;
  



}