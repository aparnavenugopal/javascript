const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  console.log(person.name); // Output: "John"
  console.log(person.age);  // Output: 30

  const propertyName = 'name';
  console.log(person[propertyName]); 
  console.log(person['city']);

  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  
  const keys = Object.keys(person);
  console.log('keys',keys);
keys.forEach(key => {
  console.log(key + ': ' + person[key]);
});

const values = Object.values(person);
console.log(values);
values.forEach(value => {
  console.log(value);
});

const entries = Object.entries(person);
console.log(entries);
entries.forEach(([key, value]) => {
  console.log(key + ': ' + value);
});

//for in iterates even through properties in the prototype chain too

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.age = 30;
  
  const john = new Person('John');
  
  for (const key in john) {
    console.log(key); // Output: "name", "age" (including inherited property from the prototype)
  }
  
  ///for Object.values,kesy entries this phenomena does not happen



  
  const keys1 = Object.keys(john);
  console.log(keys1); // Output: ["name"] (excluding inherited property from the prototype)
  
  