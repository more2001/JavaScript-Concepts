//Call bind and Apply

//Question 1: What is call?
//With the call() method, you can write a method that can be used on different objects.

var obj ={name: "Xyz"};

function sayHello(id) {
    return "Hello " + this.name + " Your ID is: " +id;
}

console.log(sayHello.call(obj, 1001));



//Question 2: What is apply?
//The apply() method is similar to the call() method. The apply() method takes arguments as an array.

var obj ={name: "Xyz"};
var arr = ["Front End Developer","React Developer",21]
function sayHello(dom1,dom2,age) {
    return "Hello " + this.name + " Your Domain is: " +dom1+ " and "+dom2 +" and your age is: "+age;
}

console.log(sayHello.apply(obj, arr));


//Question 2: What is bind?
// The bind() method returns a new function, when invoked, has its this sets to a specific value

var obj ={name: "Shubham"};

function sayHello(dom1,age) {
    return "Hello " + this.name + " Your Domain is: " +dom1+ " and your age is: "+age;
}

const myBind = sayHello.bind(obj);

console.log(myBind("Front End Developer", 21));
console.log(myBind("Software Developer", 21));


//Question: Append an array to another array
const arr = ["a","b","c"];
const arr2 = [1,2,3];

arr.push.apply(arr, arr2);
console.log(arr);


// Question Using apply to enhance Built-in functions.
// Find min/max number in an array.

const numbers = [5,6,3,2,7];


console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));


//Call bind and apply doesn't work in arrow functions, if your are using this it will always point to window/global object




// Polyfill for Call Method
let obj1 ={name: "Shubham"};

function sayHello(dom1,age) {
   console.log("Hello " + this.name + " Your Domain is: " +dom1+ " and your age is: "+age);
}

Function.prototype.myCall = function(context={}, ...args){
   if (typeof this !== "function") {
     throw new Error(this+ "IT is not a function")
   }

   context.fn = this;
   context.fn(...args);
}


sayHello.myCall(obj1, "Front End Dev",21);


// Polyfill for Apply Method
let obj2 ={name: "Shubham"};
let arr = ["Front End Developer",21];

function sayHello(dom,age) {
   console.log("Hello " + this.name + " Your Domain is: " +dom+ " and your age is: "+age);
}

Function.prototype.myApply = function(context={}, args=[]){
   if (typeof this !== "function") {
     throw new Error(this+ "IT is not a function")
    }

   if (!Array.isArray(args)) {
       throw new Error("CreateListFromArrayLike called on non-object")
    }

   context.fn = this;
   context.fn(...args);
}


sayHello.myApply(obj2,arr);



// Polyfill for Bind Method
let obj3 ={name: "Shubham"};
let arr = ["Front End Developer",21];

function sayHello(dom,age) {
   console.log("Hello " + this.name + " Your Domain is: " +dom+ " and your age is: "+age);
}

Function.prototype.myBind = function(context={}, ...args){
   if (typeof this !== "function") {
     throw new Error(this+ "cannot be bound as it's not callable")
    }

   context.fn = this;
   return function (...newArgs) {
      return context.fn(...args, ...newArgs);
   }
}


const myPollyBind = sayHello.myBind(obj3);

myPollyBind("Front End Dev",21);