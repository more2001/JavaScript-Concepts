//**Currying */
//Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

function prod(a) {
    return function (b) {
        return function (c){
            return a*b*c;
        } 
    }
}

console.log(prod(5)(4)(2));  


//Ques 2

function evaluate(opr) {
    return function (a) {
        return function (b){
            
            if (opr === "add")  return a+b;
            else if(opr === "sub") return a-b;
            else if(opr === "mul") return a*b;
            else if(opr === "div") return a/b;
            else return `Invalid operator "${opr}" please provide add,sub,div or mul as operators`
        } 
    }
}

console.log(evaluate("div")(50)(60));  



// reusable logic in currying
const mul = evaluate("mul");
console.log(mul(60)(50));
console.log(mul(60)(40));

const add = evaluate("add");
console.log(add(60)(50));
console.log(add(60)(40));


//Ques 3: Infinite Currying

function add(a) {
    return function (b){
        if (b) return add(a+b);
        return a;
    }
}

console.log(add(5)(4)(6)());


// Question 4 Currying vs Partial Application
//currying => here 3 arguments and when have 3 functions returning
function prod(a) {
    return function (b) {
        return function (c){
            return a*b*c;
        } 
    }
}

console.log(prod(5)(4)(2));  

//Partial Application => here 3 arguments and when have 2 functions returning
function prod(a) {
    return function (b,c) {
        return a*b*c;
        
    }
}

console.log(prod(5)(4,2));  


//Ques 5 Manipulation of DOM using currying ... se here in code
// https://app.codingrooms.com/w/g5H8xeNXgTZx



//Question 6 curry() implementation
//Converts f(a, b, c) into f(a) (b) (c)

//video Explanation also : https://youtu.be/k5TC9i5HonI?t=1269
function curry(func){
    return function curriedFunc(...args){
        if (args.length >= func.length) {
            return func(...args);
        }else{
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}


const prod = (a,b,c,d) => a*b*c*d;

const totalProd = curry(prod);

console.log(totalProd(1)(2)(3)(4));