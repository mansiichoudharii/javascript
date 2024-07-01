const { timeout } = require("nodemon/lib/config");

const tindeUrser = new Object();

tindeUrser.id = 123;
tindeUrser.name = "mansi";
tindeUrser.isLoggedIn = false;

// console.log(tindeUrser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "mansi",
      lastName: "choudhari",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1: "A",
};

const obj2 = {
  2: "B",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// console.log(tindeUrser);
// console.log(Object.keys(tindeUrser));
// console.log(Object.values(tindeUrser));
// console.log(Object.entries(tindeUrser));
// console.log(tindeUrser.hasOwnProperty("isLoggedIn"));

//destructuring
const course = {
  coursename: "JS in Hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

const { coursename, price, courseInstructor: instructor } = course;
console.log(coursename);
console.log(price);
console.log(instructor);
