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


