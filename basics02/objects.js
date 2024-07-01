//singelton : one of a type using constructor
//object literal

const JSUser = {
  name: "mansi",
  "full name": "mansi choudhari",
  email: "mansi@google.com",
  isLoggedIn: true,
  location: "nagpur",
};

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);

JSUser.greeting = function () {
  console.log("Welcome JSUser");
};

JSUser.greeting();

JSUser.greeting2 = function () {
  console.log(`Hello, ${this.name}`);
};

JSUser.greeting2();
