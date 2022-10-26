//***Closure*/

//Lexical Scoping

// Lexical scope is the ability for a function scope to access variables from the parent scope but parent cannot access variables from the child scope.
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();


//**Closure**
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFunc() {
    const name = 'xyz';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


//Closure Scope Chain
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20




//Questions
// Q1 what will be the output
let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();

// output: 1 0


// Ques 2: Write a function that would allow you to do this.

function createBase(n){
   
    return function(innerNum){
        console.log(innerNum + n);
    }
}


var addSix = createBase(6);
addSix(10);
addSix(21);


// Ques 3: Time optimization
function find(index){
    let a=[];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(12);
console.timeEnd("12");


//Optimized code for above

function find(){
    let a=[];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i*i;
    }
    
    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");



// Ques 4: Block scope and setTimeout
function a(){
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i);
        }, i*1000);
    }
}

a();

// we can use let to print 0 1 2  instead of using var which prints only 3
// with using closure we can get the same output as let using the var also

//video link Explanation : https://youtu.be/sZjlEKbaykc?t=1089

for (var i = 0; i < 3; i++) {
    function inner(i){
        setTimeout(function log() {
            console.log(i);
        }, i*1000);
    } 
    inner(i);
}



// Ques 5: How wOuld you use a closure to create a private counter?
function counter(){
    var _counter = 0;

    function add(inc){
      _counter += inc;   
    }

    function dispCount(){
        return `Counter = ${_counter}`;
    }

    return{
        add,
        dispCount
    }
}

const c = counter();
c.add(5);
c.add(20);

console.log(c.dispCount());


//Ques 6: What is Module Pattern?

// see a video on it for detailed


// Ques 9 Implement Caching/Memoize function
function memoizefn(fun) {
    let cacheResult = {};    
    
    return function(...args){
        let num1 = args[0];
        let num2 = args[1];
        let nums = JSON.stringify(args);

        if (nums in cacheResult) {
            console.log("cache");
            return cacheResult[nums];
        }else{
            console.log("First calculate")
            let result = fun(num1,num2);
            cacheResult[nums] = result;
            return result;
        }
    }
}

const clumsyProduct = (num1,num2)=>{

    for (let i = 0; i < 1000000; i++) {}

    return num1*num2;
}


const memoizeResult = memoizefn(clumsyProduct);


console.time("Time");
console.log(memoizeResult(9467,7649));
console.timeEnd("Time");

console.time("Time");
console.log(memoizeResult(9467,7649));
console.timeEnd("Time");

console.time("Time");
console.log(memoizeResult(9888,7555));
console.timeEnd("Time");

console.time("Time");
console.log(memoizeResult(9888,7555));
console.timeEnd("Time");


// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

let sum = 0;

function calc (n) {
    for (let i = 0; i < n; i++) {
        sum+=i;
    }
    return sum;
}


function memoize(fun) {
    let cacheResult = {};

    return function(...args){
        let n = args[0];

        if (n in cacheResult) {
            console.log("cache");
            return cacheResult[n];
        }else{
            console.log("First calculate")
            let result = fun(n);
            cacheResult[n] = result;
            return result;
        }
    }
}

const memoizedResult = memoize(calc);

console.time('Time');
console.log(memoizedResult(5));
console.timeEnd('Time');

console.time('Time');
console.log(memoizedResult(10));
console.timeEnd('Time');

console.time('Time');
console.log(memoizedResult(5));
console.timeEnd('Time');

console.time('Time');
console.log(memoizedResult(10));
console.timeEnd('Time');

