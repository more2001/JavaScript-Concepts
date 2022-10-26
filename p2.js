//****Map , Filter and Reduce****


//****Map => returns new array****
const arr = [1,2,3,4,5];

//Polyfill for map i.e. create from scratch;
Array.prototype.myMap = function(cb){
   
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i],i,this));
    }

    return newArray;
}

const square1 = arr.myMap((num)=> num**2);

const square2 = arr.map((num)=> num**2);

console.log("Using PolyFill:", square1);
console.log("Using Direct Map Method:", square2);





//****Filter => return new array*****
const arr2 = [1,2,3,4,5,6,7,8];

//Polyfill for filter i.e. create from scratch;

Array.prototype.myFilter = function(cb2){

    let newFilteredArray = [];

    for (let i = 0; i < this.length; i++) {
       if (cb2(this[i],i,this)) newFilteredArray.push(this[i])
    }

    return newFilteredArray;
}

const evenarray1 = arr2.myFilter((num)=> num%2==0);

const evenarray2 = arr2.filter((num)=> num%2==0);

console.log("Using PolyFill:", evenarray1);
console.log("Using Direct Filter Method:", evenarray2);







//***Reduce => The reduce() method returns a single value i.e. reduce the array to a single value and does not change the original array. */


const arr3=[1,2,3,4,5,6,7,8];


//Polyfill for redeuce i.e. create from scratch;
Array.prototype.myReduce = function(cb3,initialValue){
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
       accumulator = accumulator? cb3(accumulator,this[i],i,this) : this[i];
    }

    return accumulator;
}


// const sum = arr3.reduce((acc,currv,i,arr) => acc + currv, 0);

// let obj1={
//    arr3: [1,2,3,4,5],
//    product: 0,
//    sum: 0
// }

let {product1, sum1} = arr3.myReduce((acc,currv) => {
    
    acc.sum1+=currv;
    
    acc.product1*=currv;
    
    return acc;
},
{
    product1: 1,
    sum1: 0
});


let {product2, sum2} = arr3.reduce((acc,currv) => {
    
    acc.sum2+=currv;
    
    acc.product2*=currv;
    
    return acc;
},
{
    product2: 1,
    sum2: 0
});


console.log(`Using PolyFill => Product: ${product1} and Sum: ${sum1}`);
console.log(`Using Direct Reduce Method => Product: ${product2} and Sum: ${sum2}`);




// Interview Question Difference Bewtween Map and ForEach Loop

// 1st: Main difference is that Map retuns a new array with changed  values but foreach doesn't, foreach modifies the origianl array itself;

// 2nd: Watch from here : https://youtu.be/dGq0gi0wv64?t=991


