const myArr = [0, 1, 2, 3, 4];
const heros = ["man", "women"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[2]);

// myArr.push(6);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

myArr.unshift(9);
myArr.shift();

// console.log(myArr.includes(9));
// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A", myArr);
console.log(myArr.slice(1, 3));

console.log("B", myArr);

console.log(myArr.splice(1, 3));
console.log("C", myArr);
