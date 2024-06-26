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

  //promises

 //promise creation

const promiseOne = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('async task is complete');
    resolve();
  },1000);
}) ;

//promise consumption

promiseOne.then(function(){
  console.log('promise is consumed');
});

//other way to create promise

new Promise(function(resolve,reject) {
  setTimeout(function(){
    console.log('async task2');
    resolve();
  },1000);
}).then(function(){
  console.log('async2 resolved');
})

const promiseThree = new Promise((resolve,reject) => {
  setTimeout(() =>{
      resolve({
        username: 'chai',
        email: 'chai@example.com',
      })
  },1000);
})

promiseThree.then((user) => {
   console.log(user);
})

const promiseFour = new Promise((resolve,reject) => {
  setTimeout(() => {
     let error=false;
     if(!error){
      resolve({
        username:'krishna',
        password:'123',
      })
     }else{
      reject('error:something went wrong')
    }
  },1000);
})

promiseFour.then((user) => {
   console.log(user);
   return user.username; //this will be returned by another .then
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => { //this will execute even it is resolve or reject
  console.log('done');
})

//promise.all

function fetchDataFromEndpoint1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Endpoint 1');
    }, 2000);
  });
}

function fetchDataFromEndpoint2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Endpoint 2');
    }, 1500);
  });
}

function fetchDataFromEndpoint3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Endpoint 3');
    }, 1000);
  });
}

const promises = [
  fetchDataFromEndpoint1(),
  fetchDataFromEndpoint2(),
  fetchDataFromEndpoint3()
];

Promise.all(promises)
  .then((results) => {
    console.log('All data fetched successfully:', results);
    // Process the fetched data here...
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  //promise.race

  function fetchDataFromEndpoint1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Endpoint 1');
      }, 2000);
    });
  }
  
  function fetchDataFromEndpoint2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Endpoint 2');
      }, 1500);
    });
  }
  
  const promises1 = [
    fetchDataFromEndpoint1(),
    fetchDataFromEndpoint2()
  ];
  
  Promise.race(promises1)
    .then((result) => {
      console.log('First data received:', result);
      // Process the first received data here...
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  

//promise.allsettled
const promises2 = [
  Promise.resolve('Resolved Promise'),
  Promise.reject(new Error('Rejected Promise')),
  new Promise(resolve => setTimeout(() => resolve('Resolved Promise after timeout'), 2000))
];

Promise.allSettled(promises2)
  .then(results => {
    console.log('All promises settled:', results);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //async await

  const p = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('promise resolved value!')
    },10000);
  })

  const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('done for the day');
    },5000);
  })

  const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('promise resolved value!')
    },5000);
  })

  // async function getData(){
  //   return p;
  // }

  // const data = getData();
  
  // data.then(res => console.log(res));

  function data(){
     //js engine will not wait for promise to resolve hence it first
     //prints  there you are
     p.then(res => console.log(res));
     console.log('there you are');
  }

  async function handlePromise(){
    //js engine waits here hence hello how are you is not instantanously
    //printed
    console.log('am with you guys');
    const val = await p2;
    console.log(val);
    console.log('hello how are you');
    console.log(val);
    const val2 =  await p;
    console.log('will you wait 2 times');
    console.log(val2);
    console.log('happy being here');
  }
  handlePromise();

  //example using async and await

  const API_URL = "https://api.github.com/users/akshaymarch7";

  //await can only be used inside a async function

  const  handle = async () => {
    try{
      const data = await fetch(API_URL);
      const jsonValue = await data.json();
      return jsonValue;

    }
    catch(err){
      console.log(err);
    }
  }

  const w =handle();
  console.log(w);

