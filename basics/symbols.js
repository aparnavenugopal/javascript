// Creating symbols
const symbol1 = Symbol();
const symbol2 = Symbol('description');

console.log(typeof symbol1); // Output: "symbol"
console.log(typeof symbol2); // Output: "symbol"

// Symbols are unique
console.log(symbol1 === symbol2); // Output: false

// Symbols with description
console.log(symbol2.description); // Output: "description"

// Creating an object with symbol properties
const obj = {
    [Symbol('key1')]: 'value1',
    [Symbol('key2')]: 'value2'
  };
  
  // Accessing symbol properties
  console.log(obj[Symbol('key1')]); // Output: undefined, since it's a different symbol instance
  console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // Output: value1
  
  const obj1 = {
    [Symbol('key1')]: 'value1',
    [Symbol('key2')]: 'value2',
    regularKey: 'regularValue'
  };
  
  for (const key in obj1) {
    console.log(key); // Output: "regularKey"
  }
  
  console.log(Object.keys(obj1)); // Output: ["regularKey"]
  