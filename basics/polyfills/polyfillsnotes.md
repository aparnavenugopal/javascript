1.What does Array.prototype.includes() do in js?
A.In JavaScript, Array.prototype.includes() is a method used to check if an array includes a certain element, returning true or false based on the result. It was introduced in ECMAScript 2016 (ES7) and is a convenient alternative to the indexOf() method for simple inclusion checks.

array.includes(element, start)

1.array: The array to be checked.
2.element: The element to search for within the array.
start (Optional): The position in the array at which to begin the search. If omitted, the search starts from index 0.

Return Value:
true if the array contains the specified element, otherwise false.

const array = [1, 2, 3, 4, 5];

console.log(array.includes(2)); // Output: true
console.log(array.includes(7)); // Output: false

Note:

1.It works for both primitive types (like numbers, strings, booleans) and reference types (like objects, arrays).
2.It uses strict equality (===) for comparisons. So, if the array contains objects, it checks if the array elements and the specified element refer to the same object.
3.If the second parameter start is provided, includes() will start searching for the element from that index onwards. This feature is useful if you want to skip a portion of the array during the search.
4.It doesn't modify the original array.


Compatibility:

1.Array.prototype.includes() is supported in all modern browsers, but it's not supported in Internet Explorer. If you need compatibility with older browsers, you might need to use a polyfill or alternative methods like indexOf().

2.what does Array.findIndex() do in js?
A.Array.findIndex() is a method in JavaScript that is used to find the index of the first element in an array that satisfies a provided testing function. It returns the index of the first element in the array that passes the test, or -1 if no element satisfies the test.

array.findIndex(callback(element[, index[, array]])[, thisArg])

    1.callback: This is the function that tests each element of the array. It can take three arguments:
    2.element: The current element being processed in the array.
    3.index (optional): The index of the current element being processed in the array.
    4.array (optional): The array findIndex() was called upon.
    5.thisArg (optional): An optional object to use as this when executing the callback function.

    Example:

    const numbers = [10, 20, 30, 40, 50];

    // Example 1: Find the index of the first element greater than 25
    const index1 = numbers.findIndex((element) => element > 25);
    console.log(index1); // Output: 2 (index of 30)

    // Example 2: Find the index of the first negative number
    const index2 = numbers.findIndex((element) => element < 0);
    console.log(index2); // Output: -1 (no negative number found)

    // Example 3: Find the index of the first element equal to 40
    const index3 = numbers.findIndex((element) => element === 40);
    console.log(index3); // Output: 3 (index of 40)

    Explanation:

       Example 1: It finds the index of the first element in numbers array greater than 25, which is 30. So, the output is 2.
       Example 2: There are no negative numbers in the numbers array, so it returns -1.
       Example 3: It finds the index of the first element equal to 40, which is at index 3. So, the output is 3.

Explanation for customFindIndex polyfill written:

    1.It first checks if Array.prototype.customFindIndex is not defined (!Array.prototype.customFindIndex).
    2.Then, it defines Array.prototype.findIndex using a function that takes a callback function and an optional thisArg.
    3.It checks if the array (this) is not null or undefined.
    4.It checks if the callback is a function.
    5.It converts the array-like object (this) to a proper array (Object(this)) and gets its length.
    6.It iterates over the array using a for loop and calls the callback function with the current element, index, and the array itself (array[i], i, array).
    7.If the callback returns true for any element, it returns the index of that element.
    8.If no element satisfies the callback, it returns -1.