const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const merged = Object.assign({}, target, source);
console.log(merged); // Output: { a: 1, b: 4, c: 5 }

//Object.assign does shallow copy it cannot make deep copy

const obj1 = { 
    nested: { 
      prop1: 42 
    } 
  };
  
  const obj2 = Object.assign({}, obj1);
  
  obj1.nested.prop1 = 33;
  
  console.log(obj2.nested.prop1); // Output: 33 (changes made to obj1's nested property reflected in obj2)

  const obj = { prop: 42 };

  Object.freeze(obj);
  obj.prop = 33; // This will not change the value because the object is frozen

  console.log(obj.prop); // Output: 42

  const obj3 = { prop: 42 };

Object.seal(obj3);
obj3.prop = 33; // This will change the value because the object is sealed

console.log(obj3.prop); // Output: 33

const obj4 = {
    property1: 42
  };
  
  const descriptors = Object.getOwnPropertyDescriptors(obj4);
  console.log(descriptors);
  console.log(descriptors.property1.value); // Output: 42
  

  