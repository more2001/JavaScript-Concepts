//**Objects */
const user = {
   name: 'shubham',
   age: 21
}

console.log(user);

user.domain = 'Web Developer';

console.log(user);

delete user.age;

console.log(user);


//Question

const func = (function(a){
    delete a;
    return a;
})(5);

console.log(func);

// ====>  delete keyword is only used when we want to delete a property from a object not a local variable .. so the inside the function will not work ... we will get the output return as 5.


const user = {
    name: 'shubham',
    age: 21,
    "name of the college": "KCCEMSR"
}
 
console.log(user["name of the college"]);

delete user["name of the college"];

console.log(user);


//Add values dynamically

const property = "first_name";
const value = "Shubham M";

const user = {
    [property] : value
}
 
console.log(user);


//Iterate Through an object
const user = {
    name: 'shubham',
    age: 21,
    "name of the college": "KCCEMSR"
}
 
for (key in user) {
    // console.log(key);

    console.log(user[key]);
}




//Ques 1: https://youtu.be/XnFIX3c7xoI?t=425



//Ques 2 : Create a function multiplyByTwo (obj) that multiplies all numeric property values of nums by 2.

const nums = {
    a: 100,
    b: 200,
    c: "Dummy text"
}


function multiplyByTwo(nums) {
    for (key in nums) {
        if (typeof(nums[key]) === "number") {
            nums[key] = nums[key]*2
        }
    }
    console.log(nums);
}

multiplyByTwo(nums);




//Question 3 What 's the Output of the following code?

const a = {};
const b = {key : 'b'};
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]);




// Question 7 - What's the Output ?

const student = {
    name: 'shubham',
    age: 21,
    college : "KCCEMSR"
}

const data = JSON.stringify(student, ["name","age"]);

console.log(data);


//Question 8 - What's the Output ?

const shape ={
    radius : 10,
    diameter(){
        return this.radius * 2; //here the "this" will point to the given shape object.
    },
    circumference : ()=> 2 * Math.PI * this.radius  //will give NaN because the "this" in arrow function points to window object.
}

console.log(shape.diameter());
console.log(shape.circumference());


// Shallow Copy and Deep Copy
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

//https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

//Deep Copy various ways

const stud = {
    name: 'shubham',
    age: 21,
    college : "KCCEMSR"
}

const deepCopy = JSON.parse(JSON.stringify(stud));
stud.name = "xyz";
console.log(deepCopy,stud);


const deepCopy2 = Object.assign({},stud);
stud.name = "xyz";
console.log(deepCopy2,stud);

const deepCopy3 = {...stud}
deepCopy3.name = "xyz";
console.log(deepCopy3,stud);

