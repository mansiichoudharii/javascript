function add(number1, number2) {
  console.log(number1 + number2);
}

// add(5, 3);

function isLoggedIn(username = "Sam") {
  if (username === undefined) {
    console.log("please enter a user name");
  }
  return `${username} is logged in!`;
}

// console.log(isLoggedIn("Mansi"));
// console.log(isLoggedIn());
// rest operator : multiple inputs
function calculateCartPrice(...num) {
  return num;
}
// console.log(calculateCartPrice(100, 200, 400, 500));

const user = {
  name: "Mansi",
  price: 10,
};

function handleObject(anyobject) {
  console.log(
    `The usere is ${anyobject.name} and the price is ${anyobject.price}`
  );
}

// handleObject(user);
// handleObject({ name: "Sam", price: 99 });

const arr = [200, 400, 1000, 500];

function secondElement(arr) {
  return arr[1];
}

console.log(secondElement(arr));
