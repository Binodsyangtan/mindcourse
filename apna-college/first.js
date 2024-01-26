// const product = {
//     title: "ball pen",
//     rating: 4,
//     offer: 5,
//     price: 270
// };

// console.log(product);


// const profile = {
//     userid: "@bee_nood_tmg",
//     isfollow: false,
//     post: 19,
//     follower: 142,
//     following: 162,                  

// }
// console.log(typeof profile["isfollow"]);

 let rooms = [
    {
      room: "living",
      color: "lime",
      dimensionInSqFoot: 10,
    },
    {
      room: "ktch", // change this to dining
      color: "white",
      dimensionInSqFoot: false,
    },
  ];
  /* code here.. */
  console.log(rooms);
  console.log(rooms[1].room = "dinning", rooms)
  console.log(rooms[1].color = "blue", rooms)
  console.log(typeof rooms[1]["dimensionInSqFoot"])