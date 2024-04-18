function x(){
    console.log('namaste');
}

function y(x){
    x();
}

//here x is the callback function and y is the higher order function

const radius = [3,1,2,4];


const output = [];
const calculatedArea = function(radius){
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}

const calculatedCircumference = function(radius){
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]*radius[i]);
    }
    return output;
}

console.log(calculatedArea(radius));

//here in this code we are repeating a lot here as the code have 90% same
//instead what did we do is we created a generic function called calculate 
//which takes 2 arguments radius and logic the logic is a function whoch does
//some calculations by this way we are abstracting our required code and having
// reusable code this logic could be any it could be area,daiameter any.

const area = function(radius) {
    return Math.PI * radius * radius;
}
const circumference = function(radius){
    return 2*Math.PI * radius;
}

const calculate = function(radius, logic){
   const output = [];
   for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]));
   }
   return output;
} 
console.log(radius.map(area));
//here if you check we are getting the same ouput for map one this means we have
//implemented our own map and thats the beauty of higer order functions

// console.log(calculate(radius,circumference))

// console.log(calculate(radius, area));

//now if want make our hifher order function to replicate like map 

Array.prototype.calculater = function (logic){
    const output= [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculater(area));

//the this here points to the elements in the radius array and this works for 
//any array as it is defined on array.prototype


//returing function

function greet(language) {
    if (language === 'english') {
      return function(name) {
        return 'Hello, ' + name + '!';
      };
    } else if (language === 'spanish') {
      return function(name) {
        return '¡Hola, ' + name + '!';
      };
    } else {
      return function(name) {
        return 'Greetings, ' + name + '!';
      };
    }
  }
  
  const greetInEnglish = greet('english');
  console.log(greetInEnglish('John')); // Output: "Hello, John!"
  
  const greetInSpanish = greet('spanish');
  console.log(greetInSpanish('Juan')); // Output: "¡Hola, Juan!"
  
  //function statement or function declaration

  function a(){
    console.log('a is called');
  }

  //function expression 

  var b= function (){
    console.log('b called');
  }

  //the difference between statement and expression is hoisting it works in 
  //statement and does not work in expression

  //anonymous function-they do not have their identity hence we assign to some variable
  //anonymous functions are used in places where functions are used as values

//   function (){

//   }

  //named function expression

  var c = function xyz(){
    console.log('c is called');
  }

  //but we cant call this function xyz() as it throws error this is because 
  //xyz is not declared in the global scope but instead declared as a local variable

  //parameters abd arguments are not the same

  var d = function(parameter1){
    console.log('none');
  }
  d("arguments");

//callback functions

setTimeout(function(){
   console.log('timer');
},1000);

function x(y){
    console.log('x');
    y();
}

x(function y(){
  console.log("y");
});

function fetchData(url, callback) {
    // Simulate fetching data from a server
    setTimeout(function() {
      const data = { id: 1, name: 'John' };
      callback(data);
    }, 1000);
  }
  
  function processData(data) {
    console.log('Received data:', data);
  }
  
  fetchData('https://example.com/api/data', processData);

  //callbackhell

  console.log("namaste");

  setTimeout(function(){
    console.log('javascript');
  },1000);

  console.log('season2');

  const cart = ['shoes','pants','kurta']; 

  // api.createOrder(cart, function(){
  //   api.proceedToPayment(function(){
  //       api.showOrderSummary(function(){
  //         api.updateWallet()
  //       })
  //   })
  // })

  //the above code is called callbackhell

  
  





