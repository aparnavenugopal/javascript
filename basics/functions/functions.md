1.What are higher order functions?
A.Higher-order functions are functions that can take other functions as arguments or return functions as results. 
  In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as 
  arguments to other functions, and returned from functions. This enables powerful functional programming paradigms and 
  allows for more expressive and concise code.

  Characteristics of higher order functions:
   1.accepting functions as arguments
   2.returning functions as results.

  Benefits of higher order functions:
    1.Abstraction: Higher-order functions promote code reuse and abstraction by separating concerns. They allow you to abstract 
                   common patterns and behaviors into reusable functions.
    2.Flexibility: Higher-order functions enable writing more flexible and customizable code. By passing functions as arguments, 
                   you can change the behavior of a function dynamically.
    3.Expressiveness: Higher-order functions lead to more expressive and concise code by promoting functional programming paradigms 
                      such as map, filter, and reduce.

2.Why are functions called first class citizens in js?
A.Functions are called first-class citizens in JavaScript because they possess the same characteristics and capabilities as other data types, 
  such as strings, numbers, and objects. Specifically, functions in JavaScript can be treated in the same way as any other value:
    1.Assigned to variables
    2.passed as arguments
    3.returned from functions
    4.stored in data structures
       const functionsArray = [function() { return 'Hello'; }, function() { return 'World'; }];

    5.created dynamically
      const sayHello = new Function('return "Hello";');

3.What are callback functions in js?
A.
In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of a 
   specific task or at a certain event. Callback functions are a fundamental concept in asynchronous programming, allowing for non-blocking 
   operations and enabling more flexible and modular code.

   Characteristics of callback functions:
   1.Passed as Arguments: Callback functions are passed as arguments to other functions, typically functions that perform asynchronous operations 
                          or operations that depend on external events.
   2.Executed Later: The callback function is executed later, after the completion of the task or event that it is associated with. This allows 
                     for handling the result of the task or responding to the event asynchronously.

    Benefits of callback function:
    1.Asynchronous Programming: Callback functions are essential for handling asynchronous operations such as fetching data from servers, r
                                reading files, or handling user input events without blocking the main thread.
    2.Modular and Reusable Code: Callback functions promote modular and reusable code by allowing you to separate concerns and encapsulate 
                                 functionality in separate functions.
    3.Flexibility: Callback functions provide flexibility by allowing you to define custom behavior that should occur after the completion 
                   of a task or at an event.
   
4.what is callback hell or pyramid of doom?
A.Callback hell, also known as the pyramid of doom, is a situation that arises in JavaScript code when multiple nested callback functions 
  are used to handle asynchronous operations. This nesting of callbacks occurs when asynchronous tasks depend on the results of other 
  asynchronous tasks, leading to deeply nested and unreadable code structures.Here the control directly goes to the callbacks instead
  of developer making it unmaintainable unmanageble and unreadable code.

  Mitigation strategies:
   1.Named Functions: Define named functions for callback functions to improve readability and modularity.
   2.Modularization: Break down complex operations into smaller, modular functions to reduce nesting and improve code organization.
   3.Promises: Use promises to handle asynchronous operations in a more structured and readable manner. Promises allow for chaining o
               perations and handling errors more elegantly.
   4.Async/Await: Use async/await syntax, which provides a more synchronous-looking way to write asynchronous code. Async/await builds 
                  upon promises and helps eliminate callback hell by allowing you to write asynchronous code in a more linear and readable style.


5.what are promises?
A.The promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
  it is a placeholder for future value.
  It has 3 states:
     a.pending: initial state, neither fulfilled nor rejected.
     b.fulfilled: meaning that the operation was completed succesfully
     c.rejected: meaning that the operation was failed.
  
  It has 2 phases :
     1.creation
     2.consumption

6.explain promise.all promise.allsettled, promise.race?
A.Promise.allSettled is a Promise method introduced in ES2020 that takes an array (or any iterable) of promises and returns 
  a single promise. This promise resolves after all the input promises have settled, meaning they have either fulfilled or rejected.
  The difference between Promise.all and Promise.allSettled is that Promise.all rejects immediately if any of the input promises reject, 
  while Promise.allSettled waits for all promises to settle, regardless of whether they fulfill or reject. This makes Promise.allSettled 
  useful when you want to know the final state of all promises, regardless of individual outcomes.

  Promise.allSettled(iterable);

 The Promise.allSettled method returns a single promise that resolves with an array of objects once all input promises have settled. Each 
 object in the resulting array represents the outcome of a single promise in the same order as the original iterable. The objects have two 
 properties:

 1.status: Represents the outcome of the promise. It can be either 'fulfilled' if the promise fulfilled, or 'rejected' if the promise rejected.
 2.value: Contains the fulfillment value of the promise if it fulfilled, or the rejection reason if it rejected.
  
  2.Promise.all:
    Promise.all is a utility function that takes an array (or any iterable) of promises as input and returns a single promise that resolves when 
    all of the input promises have resolved, or rejects if any of the input promises reject.
   
    const promises = [promise1, promise2, promise3];

    Promise.all(promises)
     .then((results) => {
      // All promises have resolved
     console.log('All promises resolved:', results);
     })
     .catch((error) => {
     // At least one promise rejected
     console.error('At least one promise rejected:', error);
    });

    1.The Promise.all function waits for all promises in the promises array to settle.
    2.If all promises resolve successfully, the then callback receives an array of results.
    3.If any promise rejects, the catch callback is immediately invoked with the rejection reason.

  3.Promise.race:
    Promise.race is a utility function that takes an array (or any iterable) of promises as input and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.

    const promises = [promise1, promise2, promise3];

    Promise.race(promises)
    .then((result) => {
    // First promise to settle (resolve or reject)
    console.log('First promise settled:', result);
    })
    .catch((error) => {
    // If the first settling promise rejects
    console.error('First promise rejected:', error);
    });

    1.The Promise.race function waits for the first promise in the promises array to settle.
    2.The then callback receives the result of the first settling promise.
    3.If any promise rejects before settling, the catch callback is immediately invoked with the rejection reason.

7.what is async await in js?
A.by property async should always return a promise.If we dont return a   promise and instead return a value it wraps the value inside a promise and return it.async and await are used to handle promises.await is a keyword inside async function.
  How async await works:
   what happens is initially call stack is empty but when it encounters async await terms the function execution is suspended and after it getting resolved or rejected only the fucntion execution again starts.
   This is not the case with .then (ie,if there are synchoronous code after then it use to get executed first as js is synchrounous single threaded language but when it comes to async wait thats not the case the synchrounous code will also not be executed as the function execution is suspended).We can consider async await as synthectic sugar opver .then.

   1.Syntax: async and await provide a more concise and synchronous-looking syntax compared to promises and .then() callbacks, making code easier to understand and maintain.
   2.Error Handling: With async and await, error handling is done using traditional try...catch blocks, which can be more intuitive and readable compared to chaining .catch() methods with promises.
   3.Chaining: While promises can be chained using .then(), async and await do not involve chaining. Instead, you use sequential code flow with await, making it easier to reason about the control flow of asynchronous operations.
  4.Waiting: With await, you can wait for a promise to resolve before proceeding to the next line of code, whereas with promises and .then(), you need to nest functions or use .then() chains to achieve the same effect.
