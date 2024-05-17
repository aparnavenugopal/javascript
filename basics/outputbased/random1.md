explanations for all input output questions

1.uber:
    1.To understand the output of this code, it's important to comprehend the JavaScript event loop, along with how setTimeout, Promise, and microtasks work. Here's a step-by-step explanation of what happens when the code runs:

       1.console.log(1); is executed immediately in the main thread, printing 1.

       2.setTimeout(() => console.log(2)); schedules a macro task to print 2 after a delay of 0 milliseconds. This task will go into the task queue to be executed later.

       3.Promise.resolve().then(() => console.log(3)); schedules a microtask to print 3. Microtasks are executed right after the currently executing script and before any task from the task queue.

       4.Promise.resolve().then(() => setTimeout(() => console.log(4))); schedules a microtask to set another macro task to print 4 after a delay of 0 milliseconds.

       5.Promise.resolve().then(() => console.log(5)); schedules another microtask to print 5.

       6.setTimeout(() => console.log(6)); schedules a macro task to print 6 after a delay of 0 milliseconds.

       7.console.log(7); is executed immediately in the main thread, printing 7.

    2.Now, let's break down the order of execution:

      1.Main Thread Execution:

        console.log(1); → prints 1
        console.log(7); → prints 7
        Microtasks Execution (after the main thread):

        Promise.resolve().then(() => console.log(3)); → prints 3
        Promise.resolve().then(() => console.log(5)); → prints 5 
        Promise.resolve().then(() => setTimeout(() => console.log(4))); schedules another macro task to print 4.
      2.Macro Tasks Execution (after microtasks):

        setTimeout(() => console.log(2)); → prints 2
        setTimeout(() => console.log(6)); → prints 6
      3.The macro task scheduled by the microtask: setTimeout(() => console.log(4)); → prints 4

      o/0:1 7 3 5 2 6 4
