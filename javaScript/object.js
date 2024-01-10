/* object */
let myMobile = {
  brand: "samgsung",
  model: "s20",
  color: "white",
};

/* object with arrya 2 ota xa mathi and tala ko  */
let mobiles = [
  {
    user: "binod",
    brand: "redmi",
  },

  {
    user: "hari",
    brand: "samgsumg",
  },
];
mobiles[0].user = "arun";
console.log(mobiles);

/* object create garni and bahira bata access garera change ghani practice */
let user1 = {
  name: "ram",
  middleName: "bdr",
  phones: [
    {
      provider: "ncell",
      num1: "9821xxx",
      activateDate: "2079-6-6",
    },
    {
      provider: "ntc",
      num2: "9832xxx",
      activateDate: "2080-9-12",
    },
  ],
};

user1.middleName = "bahadur";
user1.phones[1].provider = "ncell";
user1.phones[1].num2 = "9761730924";

console.log(user1);

//

let todosApiData = {
  data: {
    todos: [
      { title: "html", status: "completed" },
      { title: "css", status: "completed" },
      { title: "js", status: "completed" },
    ],
  },
};

todosApiData.data.todos[2].status= "pending"
console.log(todosApiData);



