// Functions in JS

// Q1 fUNTION Declaration
function square(num){
    return num*num;
}

//Q2 Function ExPRESSION
const square = function(num){
    return num*num;
}


//Q3 First Class Functions
//The first class functions are the first class citizens and are treated as the first-class object which can be stored in variables, passed as an argument in functions, returned from other functions, have their own properties.


function dispSquare(fn){
    console.log("Square is "+fn(5));
}

dispSquare(square); 



// Q4 IIFE

//https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife


(function square(num){
    console.log(num*num); 
})(5);


(function(x){
    return (function(y){
        console.log(x);
    })(2);
})(1);

