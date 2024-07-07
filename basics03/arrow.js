const user = {
  name: "Mansi",
  price: 999,

  welcomeMsg: function () {
    console.log(`Welcome ${this.name}!!`);
  },
};

// user.welcomeMsg();
// user.name = "Sam";
// user.welcomeMsg();
// console.log(this)

// function chai() {
//   const username = "Mansi";
//   console.log(this.username);
// }

const chai = () => {
  const username = "Mansi";
  console.log(this.username);
};

chai();
