// Promises in Javascript
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Promise Resolved");
    else reject("Promis Rejected");
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(sub);

console.log("Stop");






///rewriting callbacks with promises

console.log("Start");

function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 1000);
  });
}

function displayDate() {
  return new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(`Today's Date is ${date.toLocaleString()}`);
    }, 2000);
  });
}

greet("Shubham")
  .then((res) => {
    console.log(res);
    displayDate().then((res) => {
      console.log(res);
    });
  })
  .catch((err) => console.log(err));

console.log("Stop");








//Promises Chaining
console.log("Start");

function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 1000);
  });
}

function displayDate() {
  return new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(`Today's Date is ${date.toLocaleString()}`);
    }, 2000);
  });
}

greet("Shubham")
  .then((res) => {
    console.log(res);
    return displayDate();
  })
  .then(res=>{
    console.log(res);
  })

  .catch((err) => console.log(err));

console.log("Stop");








//Promise Combinator
console.log("Start");

function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 1000);
  });
}

function displayDate() {
  return new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(`Today's Date is ${date.toLocaleString()}`);
    }, 2000);
  });
}


Promise.all([
    greet("Shubham"),
    displayDate()
])
.then(res => console.log(res))
.catch( err => console.log(err))
console.log("Stop");


//.race =>  we get only get that promise that reolves or rejects first
Promise.race([
    greet("Shubham"),
    displayDate()
])
.then(res => console.log(res))
.catch( err => console.log(err))
console.log("Stop");


//.allSelettled => if any one of the promises are failed it will return that to with reslove
Promise.allSettled([
    greet("Shubham"),
    displayDate()
])
.then(res => console.log(res))
.catch( err => console.log(err))
console.log("Stop");

//.any => if any promis is failed it will move to next promise to check whether it failed or succeeded.
Promise.any([
    greet("Shubham"),
    displayDate()
])
.then(res => console.log(res))
.catch( err => console.log(err))
console.log("Stop");




