// var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "mansi";
  function two() {
    const website = "youtube ";
    console.log(username);
  }
  two();
  //   console.log(website);
}

// one();

// +++++++++ intresting topic ++++++++

console.log(addOne(5)); //no ERROR
function addOne(num) {
  return num + 1;
}

// addTwo(5) ERROR
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
