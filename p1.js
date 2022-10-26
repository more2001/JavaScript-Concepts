// ****var vs let vs const****
// let,const => block/functional scope;
// var => global;
//ES6 => let and const



// {
//     let/const a = "xyz"; 
//     a = "super";
//     console.log(a)
// }


//***shadowing*****

//Shadowing: Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.


// function shadow() {
//     let a = 'Original';
     
//     if (true) {
//         let a = 'Shadowed';  // New value assigned
//         console.log(a);
//     }
     
//     console.log(a);
// }
// shadow();


//Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 


// function func() {
//     var a = 'HI';
//     let b = 'HI';
     
//     if (true) {
//         let a = 'Hello'; // Legal Shadowing
//         var b = 'Hello'; // Illegal Shadowing
//         console.log(a); // It will print 'Hello'
//         console.log(b); // It will print error
//     }
// }
// func();


//*****Declaration****

// var can be redeclared 

// var a;
// var a;


//let and const cannot be redeclared
// below will give error

// let a;   
// let a;    //here scope is same

// let a;
// {
//     let a;  // allowed because it done in another scope i.e. outer and inner so shadowing is allowed;
// }

// const b;
// const b;


//***Declaration without Initialization****

// we can declare var and let without any value but we cannot declare const without any value, we must provide a value for const while declaring;



//***Hoisting****

// console.log(foo);
// var foo = 'foo';
// It might surprise you that this code outputs undefined and doesn't fail or throw an error – even though foo gets assigned after we console.log it!

// This is because the JavaScript interpreter splits the declaration and assignment of functions and variables: it "hoists" your declarations to the top of their containing scope before execution.

// This process is called hoisting, and it allows us to use foo before its declaration in our example above.


// Variable hoisting with let and const

// Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared will result in a ReferenceError:

// console.log(foo); //Uncaught ReferenceError: Cannot access 'foo' before initialization

// let foo = 'bar';  //Same behavior for variables declared with const

// Notice that the interpreter still hoists foo: the error message tells us the variable is initialized somewhere.


// HOisting in detail : https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/