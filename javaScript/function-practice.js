let blogs = [
    {
      title: "Exploring Tomorrow",
      created_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      title: "Career in Web ",
      created_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      title: "Degrees Dying",
      created_at: "2024-01-17T14:06:24.457394+05:45",
    },
    {
      title: "Career in Digital Marketing",
      created_at: "2024-01-17T11:02:40.936608+05:45",
    },
  ];
  
  /* console.log(`${blogs[0].title}: ${blogs[0].created_at.substring(0,10)}`);
  console.log(`${blogs[1].title}: ${blogs[1].created_at.substring(0,10)}`);
  console.log(`${blogs[2].title}: ${blogs[2].created_at.substring(0,10)}`);
  console.log(`${blogs[3].title}: ${blogs[3].created_at.substring(0,10)}`); */


  function blogInfo(index){
    console.log(`${blogs[index].title}: ${blogs[index].created_at.substring(0,10)}`);

  }
  
  blogInfo(0)
  blogInfo(1)
  blogInfo(2)
  blogInfo(3)


  "full name".substring(0,5)
  
  "Exploring Tomorrow :2024-01-19 "
  "Career in Web : 2024-01-18 "
  "..."
  "..."
  
  

  let members = [
    {
      name: "Ram",
      joined_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      name: "Hari",
      joined_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      name: "Sita",
      joined_at: "2024-01-17T14:06:24.457394+05:45",
    }
  ];


console.log(`${members[0].name}:${members[0].joined_at.substring(0,10)}`);  // substring le string ko length lai ghatauxa 


function membersInfo(a){
    console.log(`${members[a].name}:${members[a].joined_at.substring(0,10)}`);


}
membersInfo(0)
membersInfo(1)
membersInfo(2)




  