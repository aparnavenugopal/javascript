//uber 1
console.log(1);
 
setTimeout(() => console.log(2));
 
Promise.resolve().then(() => console.log(3));
 
Promise.resolve().then(() => setTimeout(() => console.log(4)));
 
Promise.resolve().then(() => console.log(5));
 
setTimeout(() => console.log(6));
 
console.log(7);

//problem 2
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('end');

//problem3
console.log(1);

async function foo() {
  console.log(2);
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(3);
}

foo();
console.log(4);

//problem4
function delayLog(msg) {
    setTimeout(() => console.log(msg), 0);
  }
  
  console.log('start');
  delayLog('middle');
  console.log('end');
  
  //problem5
console.log('start');

setTimeout(() => {
  console.log('setTimeout1');
}, 0);

setTimeout(() => {
  console.log('setTimeout2');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('end');

//problem6
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(4);
  }, 0);
});

Promise.resolve().then(() => {
  console.log(5);
});

setTimeout(() => {
  console.log(6);
}, 0);

console.log(7);

//problem 7
function printNumbers() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  printNumbers();
  
  //problem8
  async function f1() {
    console.log(1);
    await f2();
    console.log(2);
  }
  
  async function f2() {
    console.log(3);
  }
  
  f1();
  console.log(4);
  
  //problem8
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'), 0);
const baz = () => console.log('Third');

foo();
bar();
baz();


