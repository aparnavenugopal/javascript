const numbers = [1, 2, 3, 4, 5]; // Array literal
const fruits = new Array('apple', 'banana', 'orange'); // Array constructor

console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

//slice example

const numbers2= numbers.slice(1,4);
console.log(numbers);
console.log(numbers2);

const participants = ['sai','raja','maha','karu'];

const winners = participants.slice(0,3);
console.log(winners);


//splice example ->changes the array which is called upon

const no = [2,6,8,9,10];

const deleted = no.splice(2,3,6,7);
console.log(no);
console.log(deleted);

//sorting the array-->this works great with strings if you
//give numbers it converts it to strings and give wierd output

const names = ['florin', 'sis','mis', 'ris'];

names.sort();

console.log(names);

const n =[8,39,0,27,33,-4]

n.sort();
console.log(n);

// Define an array
let fruit = ['apple', 'banana', 'orange'];

// Push method: Add elements to the end of the array
fruits.push('grape', 'kiwi');
console.log(fruit); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']

// Pop method: Remove the last element from the array
const removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'kiwi'
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Concat method: Merge arrays
const moreFruits = ['strawberry', 'blueberry'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry']

// Splice method: Remove and/or insert elements at any position
const removedItems = allFruits.splice(2, 2, 'pear', 'peach');
console.log(removedItems); // Output: ['orange', 'grape']
console.log(allFruits); // Output: ['apple', 'banana', 'pear', 'peach', 'strawberry', 'blueberry']

// Slice method: Extract a portion of an array
const slicedFruits = allFruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'pear', 'peach']

// IndexOf method: Find the index of an element in the array
const index = allFruits.indexOf('pear');
console.log(index); // Output: 2

// Join method: Convert array elements into a string
const joinedFruits = allFruits.join(', ');
console.log(joinedFruits); // Output: 'apple, banana, pear, peach, strawberry, blueberry'



