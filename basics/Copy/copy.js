
// Pure function
function add(a, b) {
    return a + b;
  }
  
  const result = add(3, 5); // Output: 8
  console.log(result);

  // Impure function
let counter = 0;
function increment() {
  counter++;
}

increment();
console.log(counter); // Output: 1

function increment(num) {
    num++; // Increment the local copy of num
    console.log("num",num)
  }
  
  let x = 5;
  increment(x);
  console.log(x); // Output: 5 (original value remains unchanged)


function modifyArray(arr) {
    arr.push(4); // Modify the shared array
  }
  
const array = [1, 2, 3];
modifyArray(array);
console.log(array); // Output: [1, 2, 3, 4] (original array is modified)

//deep copy
function deepCopyArray(arr) {
  return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
}

const arr1 = [1, { a: 2 }];
const arr2 = deepCopyArray(arr1);

console.log(arr1 === arr2); // Output: false
console.log(arr1[1] === arr2[1]); // Output: false (nested objects are deep-copied)

const originalObject = { a: 1, b: { c: 2 } };

// Deep copy using JSON.stringify() and JSON.parse()
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

console.log(deepCopyObject); // Output: { a: 1, b: { c: 2 } }

// const _= require('lodash');

// const originalObject1 = { a: 1, b: { c: 2 } };

// // Deep copy using lodash
// const deepCopyObject1 = _.cloneDeep(originalObject1);

// console.log(deepCopyObject1); // Output: { a: 1, b: { c: 2 } }



  
  