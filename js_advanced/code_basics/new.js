console.log('hello');
const pet={
    species: "dog",
    name: "krishna",
    age: 3
};

//properties that dont exist evaluate to undefined not eror
//all keys get stringified
pet[true] = "hello";

//o1[i] ='hello'
//o1["1"]="goodbye"
//0[1] = goodbye

pet.bark = function (){
    return "woof woof";
}

let myTri = {
    a:3,
    b:4,
    getArea:function (a, b) {
        return (a*b)/2;
    },
    getHypotenuse:function (a,b) {
        return Math.sqrt(a ** 2 + b ** 2);
    }
}

//not repeatable or reused hence going with classes

class  Triangle{
    constructor(a,b){
        if(!Number.isFinite(a) || a<=0){
            throw new Error('invalid ')
        }
        if(!Number.isFinite(b) || b<=0){
            throw new Error('invalid ')
        }
        this.a = a;
        this.b = b;
    }
    getArea(){
        return (this.a * this.b)/2;
    }

    getHypotenuse () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    sayHi() { 
        return `the triangle with side A of ${this.a} and a side B
        of ${this.b} with an area of ${this.getArea()} says hii!!!`
    }
}

class ShyTriangle extends Triangle{
    describe(){
        return 'you are a cute puppy'
    }
}

//classes defines the methods each instance of triangle  will have
//make a new Triangle with new Triangle()
//can still add/look at arbitary properties
//this is "the actual triangle in question"
//class names should be upperCamelCase
//reduces confusion between triangle(individual triangle) and Triangle(the class of all triangles)
//instance of gives wheater the object is instance of particular class or not
//what can constructor do?
//assign properties, validate things
//constructor functions always return undefined

//bankaccount class

class BankAccount{
    constructor(accNumber, accHolder, balance){
        if(balance <= 0){
            this.balance= 0;
        }
        this.accNumber = accNumber;
        this.accHolder = accHolder;
        this.balance = balance;
    }

    deposit(amt){
      if(amt >0){
        this.balance += amt;
        console.log(`you deposited $${amt}. new balance
          is $${this.balance}`);
      }
    }

    withdraw(amt){
        if(amt > this.balance){
            console.log('you cant withdraw that much!');
        }else{
            this.balance -= amt;
            console.log(`you withdrew $${amt}. new balance is $${this.balance}`)
        }
    }
}

//methods
//functions placed in a class are methods(instance methods).
//they have access to properties of object with this.
//they take arguments/return data like any other function.
//a method can call another method .to call a method you need to call it on this

//inheritance and super
//do not repeat yourself







