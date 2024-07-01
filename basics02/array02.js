const marvel_heros = ["thor", "spiderman", "IronMan"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

// const newHeros = [...dc_heros, ...marvel_heros];
// console.log(newHeros);

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const real_arr = arr.flat(Infinity);
console.log(real_arr);
