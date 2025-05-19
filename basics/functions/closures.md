1.what is a closure?
A.closure is a function bundled together with their lexical environment.
2.Function bulded with its surronding state.
A closure is the combination of a function and the lexical environment within which that function was declared. In simpler terms, a closure allows a function to access variables from its outer scope even after the outer scope has finished executing.

When a function is defined inside another function, the inner function has access to the outer function's variables, even after the outer function has returned. This is because the inner function maintains a reference to the variables of its outer scope, creating a closure.


Uses of Closures:
1.module design pattern
2.currying
3.functions like once
4.memoize
5.maintaing state in async world
6.setTimeouts
7.iterators
8.Data Encapsulation: Closures allow you to encapsulate variables and functions, preventing unintended modification from outside the closure.
9.Modularity: Closures promote modularity by allowing you to create self-contained units of code that can be reused and composed together.
10.Memory Efficiency: Closures enable the creation of private data and functions without polluting the global scope, leading to more memory-efficient code.

Use cases of closures:
   1.Encapsulation: Closures allow you to encapsulate variables and functions, preventing them from polluting the global scope.
   2.Private Data: By encapsulating variables within a closure, you can create private data that is inaccessible from outside the closure.
   3.Partial Application: Closures enable the creation of partially applied functions by pre-filling some arguments with values from the closure's outer scope.
   4.Callbacks and Event Handlers: Closures are frequently used with callbacks and event handlers to maintain access to variables across asynchronous operations.

cons of closures:
   1.Memory Management: Closures can lead to memory leaks if they hold references to large objects or resources that are no longer needed.
   2.Performance: Using closures excessively can impact performance, especially in scenarios where closures are created within loops or recursive functions.