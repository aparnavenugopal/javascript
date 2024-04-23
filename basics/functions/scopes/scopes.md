1.what are scopes in js?
A.In JavaScript, scopes determine the accessibility and visibility of variables and functions throughout your code. Understanding scopes is crucial for writing clean, maintainable, and bug-free JavaScript applications. There are mainly two types of scopes in JavaScript: global scope and local scope.
   1.global scope:
      ariables declared outside of any function, block, or module have global scope. These variables can be accessed from anywhere within your codebase, including inside functions and blocks.

      const globalVar = 'I am a global variable';

      function myFunction() {
        console.log(globalVar); // Accessible inside function
       }

       console.log(globalVar); // Accessible outside function
  
   2.local scope:
     Variables declared inside a function, block, or module have local scope. These variables are accessible only within the block where they are defined.
      
      function myFunction() {
        const localVar = 'I am a local variable';
        console.log(localVar); // Accessible inside function
       }

      myFunction();
      console.log(localVar); // Error: localVar is not defined

   3.block scope:
     ntroduced in ES6 (ECMAScript 2015), let and const keywords allow you to declare variables with block scope. Block scope means variables are only accessible within the block (curly braces) where they are defined.

     function myFunction() {
       if (true) {
         let blockVar = 'I am a block-scoped variable';
         console.log(blockVar); // Accessible inside block
        }
        console.log(blockVar); // Error: blockVar is not defined outside block
      }

   4.lexical scope:
     JavaScript uses lexical scope (also known as static scope) to determine the scope of variables based on where they are declared in the code. This means that inner functions can access variables from their parent functions.

     function outerFunction() {
        const outerVar = 'I am an outer variable';

        function innerFunction() {
           console.log(outerVar); // Access outerVar from parent function
         }

         innerFunction();
      }

      outerFunction();

2.what is 'this' refers to in js?
A.1.in global scape the value of this is window in browser and global in node js environment.
2.if writing it in a function in strict mode its undefined and in non strict mode it becomes window or global object.
3.the value of 'this' keyword also depends on how the function is called during runtime binding.

strict mode:

x() -->undefined

window.x() --->window object

4.when we write o=function in a object it is called method.
5.In objects this refers to object and its properties.

6.in dom the value of this is the refrence to that html element itself.

non-strict mode:
1.if object is present this refers to object or window(if no object).
2.in globalscope it refers to window.
3.we can change object reference using call/apply.
4.bind gets the function binded to object
5.arrow function gets binded with the this reference during the time of creation instead of time of execution(like function).
6.in async callback it refers to window or global object.

strict mode:
1.if object is present this refers to object or undefined(if no object).
2.in global scope here also this refers to window.
3.we can change object reference using call/apply.
4.bind gets the function binded to object
5.in async callback this refers to globalobject undefined.
6.arrow function gets binded with the this reference during the time of creation instead of time of execution(like function).

3.what is method sharing in js?
A.Method sharing in JavaScript refers to a pattern where methods are shared among multiple objects to conserve memory and promote code reuse. Instead of attaching methods directly to individual objects, the methods are stored in a single prototype object, and each object merely references this prototype.

4.what is strict and non strict mode?
A.Strict mode is a feature in JavaScript that enables a stricter set of parsing and error handling rules, which help to write more secure and optimized code. When strict mode is enabled, certain actions that are considered as "unsafe" or "deprecated" in JavaScript are restricted or produce errors.

Enabling strict mode:

  1.Global Strict Mode: Add the 'use strict'; directive at the beginning of a script or a function. When placed at the beginning of a script, it applies to the entire script. When placed within a function, it applies only to that function and its nested functions.

  'use strict';

  2.Function Strict Mode: Enable strict mode within a specific function scope by placing the 'use strict'; directive at the beginning of the function body.

  function myFunction() {
  'use strict';
  // Function strict mode
   }

Effects of strict mode:
Strict mode introduces several changes to the behavior of JavaScript code. Some of the key effects include:

     1.Prevents Implicit Global Variables: In non-strict mode, assigning a value to an undeclared variable creates a global variable. In strict mode, assigning to an undeclared variable throws a reference error.
     2.Disallows Octal Numeric Literals: Octal literals (e.g., 010) are disallowed in strict mode. In non-strict mode, they are interpreted as octal values.
     3.Disallows Assignment to Readonly Properties: Attempting to assign a value to a read-only property (e.g., undefined, NaN, Infinity) throws a type error in strict mode.
     4.Disallows Duplicate Property Names: Defining multiple properties with the same name within an object literal or function parameter list results in a syntax error.
     5.Throws Errors for Deleting Non-configurable Properties: Deleting a non-configurable property throws a type error in strict mode.
     6.Makes eval and arguments Keywords: The eval function and the arguments object become reserved keywords, which means they cannot be used as variable names or function parameters.

Non strict mode:

     Non-strict mode refers to the default behavior of JavaScript without strict mode enabled. In non-strict mode, the JavaScript engine is more lenient with certain language constructs, which can sometimes lead to unexpected behavior or security vulnerabilities.

     While strict mode imposes additional restrictions and error-checking mechanisms, it also helps developers write more robust and maintainable code by catching common programming errors and discouraging certain unsafe practices.




5.what is this substitution?
A.The term "this substitution" is often used in the context of function binding or setting the value of this in JavaScript functions. It refers to the process of explicitly specifying the value of this for a function, regardless of how it is called.

In JavaScript, the value of this is determined dynamically at runtime based on how a function is invoked. However, there are situations where you may want to control the value of this manually. This is where "this substitution" comes into play.

Methods of this substitution:
  1.Using call and apply:
      1.The call() and apply() methods allow you to call a function with a specific value for this.
      2.They take the desired value of this as the first argument and optional arguments to pass to the function.

  2.Using 'bind()':
      1.The bind() method creates a new function with a specified value for this.
      2.It allows you to "bind" a specific object as the context for the function, without invoking it immediately.
  
  3.Using arrow functions:
     1.Arrow functions do not have their own this binding. Instead, they lexically capture the value of this from the surrounding code.

Benfits of this substitution:
   1.Provides control over the value of this within functions, allowing you to specify the desired context.
   2.Enables code reuse and promotes cleaner, more maintainable code by separating concerns and making functions more modular.
   3.Facilitates functional programming techniques and patterns, such as currying, partial application, and function composition.

6.what are call,apply,bind in js explain?
A.call, apply, and bind are methods in JavaScript used to control the value of this in functions and to pass arguments. They are commonly used in situations where you want to specify the context (this) for a function or to partially apply arguments to a function.

   1.call() method:
       The call() method allows you to call a function with a specified this value and optional arguments passed individually.

       functionName.call(thisArg, arg1, arg2, ...);

       1.functionName: The function to be called.
       2.thisArg: The value to be passed as this to the function.
       3.arg1, arg2, ...: Optional arguments to be passed to the function.
   
   2.apply() method:
       The apply() method is similar to call(), but it takes arguments as an array or an array-like object.

       functionName.apply(thisArg, [argsArray]);

       1.functionName: The function to be called.
       2.thisArg: The value to be passed as this to the function.
       3.argsArray: An array or an array-like object containing the arguments to be passed to the function.
 
   3.bind() method:
       The bind() method creates a new function that, when called, has its this value set to a specified value, with a given sequence of arguments preceding any provided when the new function is called.

       const newFunction = functionName.bind(thisArg, arg1, arg2, ...);
 
       1.functionName: The function to be bound.
       2.thisArg: The value to be passed as this to the function.
       3.arg1, arg2, ...: Optional arguments to be partially applied to the new function.


Differences:
  1.call() and apply() invoke the function immediately, while bind() returns a new function without invoking it.
  2.call() and apply() expect arguments to be passed individually or as an array, respectively, while bind() allows partial application of arguments.
  3.call() and apply() are useful when you want to immediately call a function with a specific context and arguments, while bind() is useful for creating a new function with a predetermined context and partially applied arguments, which can be called later.