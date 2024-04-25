function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}

x();

function p(){
    var a=10;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}

var z = p();
console.log(z);

z();

function r(){
    var a=3;
    return function y(){
        console.log(a);
    }
}

var p = r();
console.log(p);
p();

function s(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
s();

function outerFunction() {
    const outerVariable = 'I am from outer scope';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from outer scope
    }
  
    return innerFunction;
  }
  
  const innerFunc = outerFunction(); // outerFunction executed, but innerFunction is returned
  innerFunc(); // Output: I am from outer scope
  