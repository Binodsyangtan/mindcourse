/* Function  */

//array is collection of similar data-types

let userData = [
  {
    name: "binod",
    address: {
      permaddress: {
        district: "bara",
        ward: 12,
      },
      tempaddress: {
        district: "ktm",
        ward: 3,
      },
    },
  },
];
console.log(userData);

let courses = [
  {
    course: "mern",
    duration: "one hrs",
    timing: "3-4pm",
    students: [
      {
        name: "hari",
        address: {
          permanentaddress: {
            district: "lalitpur",
            ward: "02",
          },
          temporaryaddress: {
            district: "kathmandu",
            ward: "15",
          },
        },
        educations: {
          level: "+2",
          grade: "3.5",
          school: "school....",
          passoutyear: "2078",
        },
      },
      {
        name: "ram",
        address: {
          permanentaddress: {
            district: "bara",
            ward: "13",
          },
          temporaryaddress: {
            district: "kathmandu",
            ward: "15",
          },
        },

        educations: [
          {
            level: "see",
            grade: "3.4",
            school: "geetamata sec. school",
            passoutyear: "2077",
          },
          {
            level: "+2",
            grade: "3.4",
            school: "visho niketan school",
            passoutyear: "2080",
          },
        ],
      },
    ],
  },

  {
    course: "web dev",
    duration: "one hrs",
    timing: "8-9am",
    
    students: [
      {
        name: "binod",
        address: "swyambhu",
        phone_no: "98xxxxxx",
        education: {
          level: "see",
          school: "geetamata sec. school",
          grade: "3.3",
          passoutyear: "2075",
        },
      },
      {
        name: "amrit",
        address: "dallu",
        phone: "983xxxxx",
        address: {
          permanentaddress: {
            district: "dhankuta",
            ward: "1",
          },
          temporaryaddress: {
            district: "kathmandu",
            ward: "2",
          },
        },

        educations: [
          {
            level: "see",
            school: "aim school",
            grade: "3.0",
            passoutyear: "2074",
          },
          {
            level: "plus 2",
            school: "viswa niketan school",
            grade: "3.5",
            passoutyear: "2077",
          },
        ],
      },
    ],
  },
];

console.log(courses);
