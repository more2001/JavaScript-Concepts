// "use strict";
//console.log("Hello World");

// var myName = 'SHUBHAM MORE';
// console.log(myName);

// NaN == NaN

// console.log(NaN == NaN);


// var x = 5;
// var y = ++x;

// console.log(x)

// console.log(y)

// var c = 3**3;

// console.log("cube of 3 is " +c)


// var a=20
// var b=66

// a= a + b  //a=86
// b= a - b  //b=20
// a= a - b  //a=66

// console.log("the value of a after swapping",a)

// console.log("the value of b after swapping",b)


// for(var i=1; i<=12; i++){
//     debugger;    
//     var num=9;
//     console.log(num+" x "+i+" = "+(num*i));
// }

// function sum(){
//     var a=10,b=20;
//     var T = a+b;
//     console.log(+a+" + "+b+" = "+T);
    
// }

// sum();


// function sum(a,b){
//         var T = a+b;
//         console.log(T);
        
// }
    
// sum(10,20);
// sum(60,120);
// sum(8.6,1.1);


// function sum(a,b){
//         var T = a+b;
//         console.log(T);
        
// }
    
// var funExp = sum(10,20);



// function sum(a,b){
//     return T = a+b;
// }
// var funExp = sum(10,50);

// console.log("The total of two number's is: "+funExp);



// var funExp = function(a,b){                //ANYNONYMUS FUNCTION
     
//     return total = a+b;
// }

// console.log(funExp(100,650));

// var funExp = function(a,b){                //ANYNONYMUS FUNCTION
     
//     return total = a+b;
// }

// var sum = funExp(20,65);
// console.log("The total of two number's is: "+sum );


// ES6

// LET VS CONST VS VAR

// var myName = "BOSS";
// console.log(myName);

// myName = "SHUBHAM MORE";
// console.log(myName);


// let myName = "BOSS";
// console.log(myName);

// myName = "SHUBHAM MORE";
// console.log(myName);


// const myName = "BOSS";
// console.log(myName);

// myName = "SHUBHAM MORE";
// console.log(myName);


// VAR ==> Function Scope

// function biodata(){
//     var myFirstName = "SHUBHAM";
//     console.log(myFirstName);
  
//   if(true)
//   {
//     var myLastName = "MORE";
//     console.log('inner ' + myLastName);
//     console.log( 'inner ' + myFirstName);
//   }
//     console.log( 'innerOuter ' + myLastName);
// }

// biodata();
    

// let and const ==> Block Scope

// function biodata(){
//     let/const myFirstName = "SHUBHAM";
//     console.log(myFirstName);
  
//   if(true)
//   {
//     let/const myLastName = "MORE";
//     console.log('inner ' + myLastName);
//     console.log( 'inner ' + myFirstName);
//   }
//     console.log( 'innerOuter ' + myLastName);  //will give Error due to block scope
// }

// biodata();
    

/// Template Literals

// for(let i=1; i<=12; i++){
//     let num=9;
//     // console.log(num+" x "+i+" = "+(num*i));
//     console.log( `${num} x ${i} = ${num*i}` );
// }


// Default Parameters 

// function mult(a,b=6){
//     return a*b;
// }

// console.log(mult(10));


// Fat Arrow Function   
// {Fat arrow function says that if your code is of one line then no need to use return "statement" and you can also remove the brace brackets "{}" }

// const sum = () => `the sum of two no.s is =  ${ (a = 5) + (b=6) }`;

// console.log(sum());


// for in loop and for of loop
// var names = ['shubham', 'kaushal','raj','ajaay'];

// for (let elements in names){
//     console.log(elements);
// }

// for (let elements of names){
//     console.log(`\n${elements} \n`);
// }


// for each loop

// var names = ['shubham', 'kaushal','raj','ajaay'];

// names.forEach(function(element ,index, array) {
//     console.log(element + " index: " +index+ " " +array)
// });



// for each loo with fat arrow func.
// var names = ['shubham', 'kaushal','raj','ajaay'];
// names.forEach((element ,index, array) => {
// console.log(element + " index: " +index+ " " +array)
// });


// Searching and Filtering in an Array
// var names = ['shubham', 'kaushal','raj','ajaay',"raj"];

// console.log(names.indexOf("raj"));    // first index

// console.log(names.lastIndexOf("raj"));   // last index


// var names = ['shubham', 'kaushal','raj','ajaay',"raj"];

// console.log(names.includes("raj"));   // search
    
// find method
// const prices = [200,300,400,500,600,700];


// const findEle = prices.find((currVal) => currVal < 400 );    // prices > 400
// console.log(findEle);

// console.log( prices.find( (currVal) => currVal < 400 ) );


// // find index

// console.log( prices.findIndex( (currVal) => currVal < 400 ) );


// filter method

// const prices = [200,300,400,500,600,700];

// const newprices = prices.filter( (element , index ) => {
//    return element < 400;
// });

// console.log(newprices);


// Sort 

// const months = ['may', 'janauary',  'march', 'february' ,'april' ];

// console.log(months.sort());


// const num = [99,21,1000,4,16];
// console.log(num.sort());      // its sorts numbers in the form of string in ascending order  like 1 will come first then 16 because 1 is there no matter what and the length of numbers after 1 ...it will just consider 1 ....then 2 will come and same as said


// Array Subsection  ===> perform CRUD
// push() method

// const animals = ['pigs' , 'goats' , 'sheep'];

// const count = animals.push('chicken');
// console.log(animals);
// console.log(count);

// animals.push('cow', 'cat', 'dog');
// console.log(animals);

// unshift () method 

// const animals = ['pigs' , 'goats' , 'sheep'];

// const count = animals.unshift('chicken');
// console.log(animals);
// console.log(count);

// animals.unshift('cow', 'cat', 'dog');
// console.log(animals);


// pop method
// const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);

// console.log(plants.pop());

// console.log(plants);


// shift method
// const plants = ['broceoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);

// console.log(plants.shift());

// console.log(plants);


// splice method
// const months = ['may', 'janauary',  'march', 'february' ,'april' ];

// const new_months = months.splice(months.length,0,"Dec");
// console.log(months); 
// console.log(new_months); // will give empty array because mostly it is used for deleting

// const upd_month = months.splice(2,1,'March')   //updating value
// console.log(months);             


// const indexofMonth = months.indexOf('march');    //update using indexof
// console.log(indexofMonth);
// if(indexofMonth != -1){
//     const upd_month = months.splice(indexofMonth,1,'March');
//     console.log(months);

// }
// else{
//     console.log('No such data found');
// }


//deleting march
// const indexofMonth = months.indexOf('march');    

// if(indexofMonth != -1){
//     const upd_month = months.splice(indexofMonth,1);
//     console.log(months);
//     console.log(upd_month);
// }
// else{
//     console.log('No such data found');
// }

// DELETING ELEMENTS INCLUDING INDEX POSITION ELEMENTS AND AFTER THAT INDEX ALSO SO WE USE INFINITY
// if(indexofMonth != -1){
//     const upd_month = months.splice(indexofMonth,Infinity);
//     console.log(months);
//     console.log(upd_month);
// }
// else{
//     console.log('No such data found');
// }


// ARRAY MAP METHOD .map()
// const array1 = [1,4,9,16,25];
// // num > 9

// let newarr = array1.map( (currEle,index,arr) => {
//      return currEle > 9 ;

// });
// console.log(array1);
// console.log(newarr);


// let newarr = array1.map( (currEle,index,arr) => {
//      return `Index no = ${index} and the value is ${currEle} belong to ${arr} `

// });

// console.log(newarr);


// squareroot using map
// let arr = [25,36,49,64,81];

// let arrsqr = arr.map( (currele) => {
//       return Math.sqrt(currele);
// });
// console.log(arrsqr);


// Multiply each element by 2 and return only those which are greater than 10 .....using map method
// let arr = [2,3,4,6,8];

// let arr2 = arr.map( (currele) => {
//       return currele * 2;
// }).filter((currele) => {
//      return currele > 10;
// })

// console.log(arr2);

//reduce length
// let arr2 = arr.map( (currele) => currele*2 ).filter((currele) => currele > 10 );
// console.log(arr2);



// reduce method

// flatten an array means to convert the 3d or 2d array into a

// single dimensional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.
// The reducer function takes four arguments:

// Accumulator

// Current Value

// Current Index

// Source Array

// let arr = [5,6,2];

// let sum = arr.reduce( (Accumulator, currele, index , arr) => {
//       return Accumulator += currele;

// },7)
// console.log(sum);


// const arr = [
//         ['zone1','zone2'],
//         ['zone3','zone4'],      
//         ['zone5','zone6'],
//         ['zone7','zone8'],
// ];

// let flat_arr = arr.reduce( (accum, currVal) => {
//     return accum.concat(currVal);
// })

// console.log(flat_arr);

// let my_name = "shubham";
// let my_surname = 'more';

// // let mynewname = new String("BOSS");

// console.log(my_name);
// console.log((mynewname));


// Escape character 

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);


//Finding a String in a String 
// const str = "i love my india";
// console.log(str.indexOf("india"));


// searching string in a string
// const str = "i love my india";

// let sdata = str.search("my");
// console.log(sdata);

// slice method

// var str = "apple, banana, kiwi, mango";

// let res = str.slice(0,4);
// console.log(res);

// let res = str.slice(7,-2);
// console.log(res);

// let res = str.slice(7);
// console.log(res);

// limit text 280char

// let mytweets = "Amet id nulla quis sit et. Et occaecat cillum in ea Lorem enim qui ullamco ullamco sit. Adipisicing ad pariatur consequat tempor et adipisicing consequat velit in non voluptate anim. Anim occaecat deserunt deserunt amet aute ad. Sit consequat qui ad consequat do dolor aute. Ipsum ea incididunt amet laboris aliquip velit excepteur commodo commodo laborum qui consequat esse do.";

// let myactaultweet = mytweets.slice(0,280);
// console.log(myactaultweet);

// console.log(mytweets.length);


//substring method

// var str = "apple, banana, kiwi, mango";

// let res = str.substring(0,4);
// console.log(res);


// let res = str.substring(7,-2);
// console.log(res);


// substr() method

// var str = "apple, banana, kiwi";

// let res = str.substr(0,4);
// console.log(res);

// let res = str.substr(7,-2);
// console.log(res);

// let res = str.substr(-4);
// console.log(res);


// replace string content 

// let mydata =  "Mumbai Indians defeated Delhi Capitals by 5 wickets in the Indian Premier League (IPL) 2020 final.";

// let rep_data = mydata.replace('defeated','DEFEATED');
// console.log(rep_data);

// charAt() method

// let str = "HELLO WORLD";
// console.log(str.charAt(9));

// let str = "HELLO WORLD";

// console.log(str.charCodeAt(9));  // for any number knowing index number


// let lastchar = str.length-1;
// console.log(str.charCodeAt(lastchar));  // for lsat word D




// property access

// var str = "HELLO WORLD";
// console.log(str[1]);


// other useful methods

// let myname = "shubham more";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());


// concat() method

// let fname = "shubham"
// let lname = "more"

// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname));


// string.trim()

// var str = "           Hello World!                       ";
// console.log(str.trim());


// convert string to array
//split method

// var txt = "a,b,c,d,e,f";  // string

// console.log(txt.split(","));   // split on commas
// console.log(txt.split(" "));   // split on spaces
// console.log(txt.split("|"));   //split on pipe


// date and time in javascript

// new Date()

// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// // it takes 7 arguments

// new Date(milliseconds)
// // we cannot avoid month sectio

// // new Date(date string)

// new Date()
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date().toLocaleString()); 

// console.log(new Date().toString()); 


// console.log(Date.now());

// var d = new Date(2018, 11 , 24 , 10 , 33 , 30 , 0);
// console.log(d.toLocaleString());

// new Date(dateString)

// var d = new Date("May 12, 2021  20:08:00");
// console.log(d.toLocaleString());

// a Dates Method

// const curDate = new Date();

// // how to get the individual date
// console.log(curDate.toLocaleString());

// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

/// how to set the individual date

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optically set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// console.log(curDate.setMonth(10));    // 0-11 jan to dec
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


// Time mmethods

// const curTime = new Date();

// // how to get the indivisual Time

// console. log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds
// // since January 1, 1970

// console. log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a number (0-23)

// console. log(curTime.getMinutes());
// console. log(curTime.getSeconds());
// console. log(curTime.getMilliseconds());




// const curTime = new Date();

// // how to set the indivisual Time

// // console. log(curTime.setTime());
// // // // The setTime() method returns the number of milliseconds
// // // since January 1, 1970

// console. log(curTime.setHours(5));
// // // The setHours() method returns the hours of a date as a number (0-23)

// console. log(curTime.setMinutes(5));
// console. log(curTime.setSeconds(5));
// console. log(curTime.setMilliseconds(5));



// MATH OBJECT IN JAVASCRIPT

// console.log(Math.PI);


//Math.round()
// let num = 10.2565;
// console.log(Math.round(num));

//Math.pow()
// console.log(Math.pow(2,3));
// console.log(2**3);

//Math.sqrt()
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

//Math.abs()
// console.log(Math.abs(-55));
// console.log(Math.abs(-55.55));
// console.log(Math.abs(-955));

//Math.ceil()
// console.log(Math.ceil(4.51));
// console.log(Math.ceil(99.1));

//Math.floor()
// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));


//Math.random()
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));


//Math.trunc()

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


// Events in Javascript

// / HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.




// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()




//**********************************************************************

// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// How to create an Object?

// 1st way 

  // let bioData = { 
  //     myName : "thapatechnical",
  //     myAge : 26,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "thapatechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "vinod",
//     channelName : "thapa technical" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );





// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  


// // For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();



// // ex 3 

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another obj




// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 🏁
  // const myBioData = {
  //   myFname : 'vinod',
  //   myLname : 'thapa',
  //   myAge : 26
  // }

  // let age = myBioData.age;
  // let myFname = myBioData.myFname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myLname);


  // 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      // let myName = "vinod";
      // const myBio = {
      //   [myName] : "hello how are you?",
      //   [20 + 6] : "is my age"
      // }

      // console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  // let myName = "vinod thapa";
  // let myAge = 26;

  // const myBio = {myName,myAge}

  // console.log(myBio);




// 7️⃣Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // // 2nd time add one more color on top and tell we need to write it again 
// // // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);



// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person, id: 3};

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()


// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// // console.log( 9007199254740991n + 12n );

// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);



// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 


// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javas.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c);  //I can't use C 
// }
// first();


// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);


// 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//     console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


//Currying


// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(6)(5)(6);

// const prod = (num1) => (num2) => (num3) => console.log(num1*num2*num3); 

// prod (6)(5)(6);


// function sum(num1){
//   // console.log(num1);
//   return function(num2){
//    // console.log(num1, num2);
//      return function( num3){
//         console.log(num1+num2+num3);
//       }  
//   }   
// }  
// sum(5)(3)(8);



// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
  
// sum(5)(3)(8);



// // 8️⃣: CallBack Hell 

// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);  
// // "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 

// typeof(object_as_string_as_object);  
// // "object" 



//JOKES PROECT

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');


//     // ****PROMISES***////

// const generateJokes = () => {

//     const setHeader = {

//       headers: {
//         Accept : "application/json"
//       }
//     }



//      fetch('https://icanhazdadjoke.com', setHeader)
//      .then( (res) =>  res.json() )

//      .then( (data) => {
//         jokes.innerHTML = data.joke;
//      })
        
//      .catch((error) => {
//         console.log(error);
//      })

// }



//***Async await**//
// const generateJokes = async () => {

//   try{
//     const setHeader = {

//       headers: {
//         Accept : "application/json"
//       }
//     }

//     const res =  await fetch('https://icanhazdadjoke.com', setHeader);
//     const data = await res.json();
//     jokes.innerHTML = data.joke;
//   }catch(err){
//      console.log(`the Error is ${err}`)
//    }
// }



// jokeBtn.addEventListener('click', generateJokes());
// generateJokes();



//**TEMPERATURE**//

// const calculateTemp = () => {
//   const numberTemp = document.getElementById('temp').value;

//   const tempSelected = document.getElementById('temp_diff');
//   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

//   const celToFah = (cel) => {
//        let fahrenheit = Math.round((cel * 9/5) + 32);
//        return fahrenheit;
//   }

//   const  fehToCel = (fehr) => {
//        let celsius = Math.round((fehr - 32) * 5/9 );
//        return celsius;
//   } 


//   let result;

//   if(valueTemp='cel'){
//      result = celToFah(numberTemp);
//      document.getElementById('resultContainer').innerHTML =' ${result} °Fahrenheit';
//   }else{
//      result = fehToCel(numberTemp);
//      document.getElementById( 'resultContainer').innerHTML=' ${result} °Celsius';
//   }

// }




// ajax call using fetch use with html file
// fetch('https://api.covid19api.com/summary')
// .then( (apidata) => {
//   // console.log(apidata);
//   return apidata.json();
// })
// .then( (actualdata) => {
//      const mydata = actualdata.Countries[76];
//      document.getElementById('apidata').innerHTML = `the name of the country is ${mydata.Country}. The Total Confirmed cases here is ${mydata.TotalConfirmed}`;
// }) 
// .catch( (error) =>{
//    console.log(error);
// });


// //**ajax call using async await  */

// async function getCovidapi() {
//   const jsondata = await fetch('https://api.covid19api.com/summary')

//   const jsdata = await jsondata.json();
//   // console.log(jsdata.Countries[76].Country)
//   const mydata = jsdata.Countries[76];
//   document.getElementById('classname').innerHTML = `the name of the country is ${mydata.Country}. The Total Confirmed cases here is ${mydata.TotalConfirmed}`;
    
// }

// getCovidapi();

// const fetchProducts = ()=>{
//   fetch('https://api.covid19api.com/summary')
//   .then((response) => response.json())
//   .then((data) => console.table(data.Countries))

// }

// fetchProducts();



// rest operator

// Rest Parameter is an improved way to handle function parameter,
// allowing us to more easily handle various input as parameters in
// function.

//The rest parameters gather all the remaining arguments.

// const sum=(...args)=>{
//   console.log(args);

//   let total = 0;

//   for(let i of args){
//     total+=i;
//   }
//   console.log(total);
// }

// sum(1,2,3,4,5,6,7,8,9,10);