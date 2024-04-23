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
4.what is strict and non strict mode?
5.what is this substitution?
