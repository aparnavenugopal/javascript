1.what is prototype in js?
A.Prototype:
   In JavaScript, every object has a property called prototype, which is a reference to another object. This object is used as a fallback source of properties and methods for the object when they are not found on the object itself. The prototype object is a blueprint from which other objects can inherit properties and methods.

2.What is prototypal inheritance?
A.Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects. When you access a property or method on an object, JavaScript first checks if the property or method exists on the object itself. If not found, it looks up the prototype chain until it finds the property or method in one of the prototype objects.

3.How prtotypal inheritance works in js?
A.1.Object Creation with Prototypes:
      1.Objects in JavaScript can be created in several ways, such as object literals, constructor functions, or the Object.create() method.
      2.When you create an object using a constructor function or Object.create(), the prototype property of the constructor function or the object becomes the prototype of the newly created object.
   2.Prototype Chain:
      1.Every object in JavaScript has a prototype chain, which is a series of linked objects.
      2.When you access a property or method on an object, JavaScript first checks if the property or method exists on the object itself. If not found, it looks up the prototype chain until it finds the property or method in one of the prototype objects.
   3.Constructor Functions and Prototypes:
      1.Constructor functions are a way to create objects with shared properties and methods.
      2.You can add properties and methods to the prototype object of a constructor function, and they will be shared among all instances created with that constructor function.

4.what is new keyword in js?
A.n JavaScript, the new keyword is used to create new instances of objects from constructor functions. When used with a constructor function, new performs the following steps:

      1.Creates a New Empty Object:
        new creates a new, empty object.
      2.Sets the Prototype of the New Object:
        It sets the prototype of the newly created object to the prototype property of the constructor function.
      3.Calls the Constructor Function with this Binding:
        It calls the constructor function with the newly created object bound to the this keyword within the constructor function.
      4.Returns the New Object:
        Finally, new returns the newly created object. If the constructor function does not explicitly return an object, the newly created object is returned implicitly.

It's important to use the new keyword when creating instances of objects with constructor functions to ensure that the correct prototype chain is established and that the constructor function behaves as expected.

If you forget to use the new keyword when calling a constructor function, the this keyword inside the function will refer to the global object (window in the browser or global in Node.js), which can lead to unintended side effects or errors.

5.what is __proto__ in js explain in detail?
A.In JavaScript, __proto__ (pronounced "dunder proto") is a non-standard, internal property of objects that allows access to the prototype of an object. It provides a way to traverse the prototype chain and access properties and methods inherited from the prototype object.

   1.__proto__ is a non-standard property that exists on every object in JavaScript.
   2.It provides a direct link to the prototype object of the object.
   3.It allows you to access the prototype of an object directly, without using the Object.getPrototypeOf() method.
   4.Changes to __proto__ affect the prototype chain dynamically.

   const obj = {};
   console.log(obj.__proto__ === Object.prototype); // Output: true

   1.Non-Standard: __proto__ is a non-standard feature and is not part of the ECMAScript standard. Although widely supported in browsers, its usage is discouraged.
   2.Read-Only in Some Environments: In certain environments like Node.js, __proto__ is read-only and cannot be modified.
   3.Performance Implications: Directly accessing __proto__ can have performance implications, especially when used in performance-sensitive code.
   4.Standard Alternatives: The Object.getPrototypeOf() and Object.setPrototypeOf() methods provide standard ways to access and modify prototypes without relying on __proto__.
