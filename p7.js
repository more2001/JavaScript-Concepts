//***** "this" Keyword****"(Implicit Binding)

const { object } = require("webidl-conversions");

this.a = 5;

console.log(this); // this will point to window object


// This explanation in object in normal function and arrow function : https://youtu.be/rv7Q11KWmKU?t=225


//*this in class**/

class user{

    constructor(n){
        this.name = n;
    }

    getName(){
        console.log(this.name);
    }
}


const User = new user("Shubham");

User.getName();


//Ques 1: What will be the output?

const user = {
    firstName : "Shubham",
    getName(){
        const firstName = "Shubham!";
        return this.firstName;
    }
}

console.log(user.getName());



// Question 2 What is the result of accessing its ref? Why?

function makeUser() {
    return{
        name: "Shubham",
        ref(){
            return this.name;
        }
    }
}

let user = makeUser();

console.log(user.ref());


//Question 3 What is the Output ?
const user = {
    name : "Shubham",
    logMsg(){
        console.log(this.name);
    }
}

setTimeout(()=> user.logMsg(),1000);


//Question 5 Create an object calculator

let calculator ={
    
    read(){
        this.a = +prompt("Enter value of a: ",0),
        this.b = +prompt("Enter value of b: ",0)
    },

    sum(){
        return this.a + this.b
    },

    mul(){
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


// Question 6 What will be the Qutput?

var len = 4;

function callback() {
    console.log(this.len);
}

const obj = {
    len: 5,
    method(fn){
       fn();
    }
}

obj.method(callback);



// Question 7: Implement this code
//here we have chained the function call in result so we will return the whole object using "this" only in every function below instead of this.total ,if we individually call the fucntions then return this.total / this anyone

const calc = {
    total : 0,

    add(n){
        this.total+=n;
        return this;

    },

    mul(n){
        this.total*=n;
        return this;
    },

    subtract(n){
        this.total-=n;
        return this;
    },
    
    
}


const result = calc.add(10).mul(5).subtract(30).add(10);

console.log(result.total);



//or
// const calc = {
//     total : 0,

//     add(n){
//         this.total+=n;
//         return this.total / this;

//     },

//     mul(n){
//         this.total*=n;
//         return this.total / this;
//     },
    
//     sub(n){
//         this.total-=n;
//         return this.total / this;
//     },

// }



// calc.add(10)
// calc.mul(5);
// calc.sub(30);
// calc.add(10);

// console.log(calc.total);