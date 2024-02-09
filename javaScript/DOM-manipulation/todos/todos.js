let todos = [];

function addTodo(event) {
  /* hamle le html mah onsubmit event add garyou so listeer le chai listen garxa and preventDefault function le default banauxa and page refresh hunna when we add something */
  event.preventDefault();
  // console.log("add-new-todo");
  let input = document.getElementById("input-title").value;
  // console.log("add", input)
  todos.push(input);
  convertTodoList();

  
}

function deleteTodo(deletableindex) {
  /* first kun delete garni teslai print garna sikne like console garera kun index lai delete garne telslai parint garna sikne first */
  todos = todos.filter((el, index) => index != deletableindex);

  convertTodoList();

  // let outputlist = "";

  // todos.forEach((input, index) => {
  //   outputlist += `<li>${input} <button onclick="deleteTodo(${index})">delete</button></li> `;
  // });
  // /* delete garda only jun delete garni tyo matra delete hunu paryou */

  // console.log(outputlist);
  // document.getElementById("todos-list").innerHTML = outputlist;
}



/* repeat vako xa hamle repeat harule yak thau mah rakhera call garna sakinxa */

function convertTodoList(){

  let outputlist = "";

  todos.forEach((input, index) => {
    outputlist += `<li>${input} <button onclick="deleteTodo(${index})">delete</button></li> `;
  });
  /* delete garda only jun delete garni tyo matra delete hunu paryou */

  console.log(outputlist);
  document.getElementById("todos-list").innerHTML = outputlist;

}