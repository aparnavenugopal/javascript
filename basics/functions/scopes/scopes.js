
//this in object
//everything is non strict mode

const obj = {
    a: 10,
    x: function (){
        console.log(this.a);
    }
}

obj.x();

console.log(this); //window object or global object

//called from a function

function there(){
    console.log(this); //window in non strict mode
}

there();

//called wrt to object

let bfObject = {
    name: 'rama chandra',
    age: 21,
    gfFunction: function(){
        console.log(this);
    }
}

bfObject.gfFunction();

//called wrt window by passing refrence

const l = bfObject.gfFunction;
l();//window object as it is not called with reference to a object .l is not done

//strict mode

"use strict";

console.log('u r in strict mode');
console.log(this);

"use strict";

function hi(){
    console.log(this); //undefied
}

hi();

//call,apply,bind

var bf1Object = {
    name: 'Rahul',
    age: 30,
    car: 'ola auto',
    gfFunction: function(a,b){
        console.log(a,b, this);
    }
}

var bf2Object = {
    name: 'Amit',
    age:24,
    car: 'mercedes',
    gfFunction: function(a,b){
        console.log(a,b,this);
    }
}

bf1Object.gfFunction(1,2);// rahul object

console.log('call implementation');

bf1Object.gfFunction.call(bf2Object, 1,2); //call helps to change the object reference

console.log('aply implementation');

bf2Object.gfFunction.apply(bf1Object,[1,2]);

console.log('bind application');

const wifeFunction = bf1Object.gfFunction.bind(bf1Object);
wifeFunction();

//when this is present in async methods

const objc = {
    value: 42,
    regularMethod: function(){
        setTimeout(function(){
           console.log('regular methods this:',this.value); //all async callbacks will get executed wrt global scope 
        },1000);
    },
    arrowMethod: function(){
        setTimeout(() => {
          console.log('arrow methods this',this.value);//arrow function gets binded to the object during its creation only
             //unlike normal function which binds during execution
        },1000)
    }
}

objc.regularMethod(); //undefined
objc.arrowMethod();

let objr = {
    a: 1,
    print: function(){
        function innerPrint(){
            console.log("a>", this.a);
        }
        innerPrint();//as there is no object to this function call it giver undefined as output
        const arrowPrint = () => {
            console.log('arrow a',this.a);
        }
        arrowPrint();
    }
}

objr.print();

console.log('namaste javascript example');

const student = {
    name: 'krishna',
    x: function(){
        console.log(this.name);
    }
}

const student2 = {
    name:'bujjulu',
}


student.x.call(student2);

function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  greet.call(person); // Output: Hello, John!


  
  const person1 = { name: 'John' };
  const boundGreet = greet.bind(person1);
  boundGreet(); // Output: Hello, John!
  
  const person2 = {
    name: 'John',
    greet: () => {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  person2.greet(); // Output: Hello, undefined!
  