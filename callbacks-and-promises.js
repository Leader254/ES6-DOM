// javascript promises
// Promise
// Imagine that you’re a top singer, and fans ask day and night for your upcoming song.
// To get some relief, you promise to send it to them when it’s published. You give your fans a list. 
// They can fill in their email addresses, so that when the song becomes available, all subscribed parties 
// instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t 
// publish the song, they will still be notified.
// Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song.

// This is a real-life analogy for things we often have in programming: “producer” (the “singer” above)
// A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

// let promise = new Promise(function(resolve, reject) { // resolve and reject - callbacks provided by JavaScript itself
//     // executor (the producing code, "singer")
//     // When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

//     // resolve(value) — if the job is finished successfully, with result value.
//     // reject(error) — if an error has occurred, error is the error object.
//     // So to summarize: the executor runs automatically when a new Promise object is created. Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
//     // When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.
//     // The promise object returned by the new Promise constructor has these internal properties:

// // state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
// // result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
// });

// example of a successful promise
// let promise1 = new Promise(function(resolve,reject){

//     // the function is executed automatically when the promise is constructed
//     setTimeout(() => resolve("done"), 1000);
// });

// // example of failed promise
// let promise2 = new Promise(function(resolve,reject){

//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // To summarize, the executor should perform a job (usually something that takes time) and then call 
// // resolve or reject to change the state of the corresponding promise object.
// // A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.

// let promise3 = new Promise(function(resolve,reject){
//     resolve("done");

//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
// });

// // The state and result are internal
// // The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. They are described below.

// // Consumers: then, catch, finally

// // A promise object serves as a link between the executor (the “producing code” or “singer”) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally.

// // then
// // syntax:

// promise4.then(
//     function(result){ /* handle a successful result */ },
//     function(error){ /* handle an error */ }
// );
// The first argument of .then is a function that runs when the promise is resolved and receives the result.
// The second argument of .then is a function that runs when the promise is rejected and receives the error.

// example of a successful promise

// let promise5 = new Promise(function(resolve,reject){
//     setTimeout(() => resolve("done"), 1000);
// });

// // resolve runs the first function in .then
// promise5.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
// );

// // example of a failed promise
// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => reject(new Error("Failed Promise!")), 1000);
// });

// promise.then(
//     result => console.log(result), // doesn't run
//     error => console.log(error) // shows "failed promise"" after 1 second
// );


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // reject runs the second function in .then
//   promise.then(
//     result => console.log(result), // doesn't run
//     error => console.lot(error) // shows "Error: Whoops!" after 1 second
//   );
// catch
// if we're interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // .catch(f) is the same as promise.then(null, f)
// promise.catch(console.log); // shows "Error: Whoops!" after 1 second


// finally
// The call .finally(f) is similar to .then(f,f) in the sense that f always runs when the promise is settled: be it resolve or reject.
// finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.
// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("result"), 2000);
// })

// promise.finally(() => console.log("Promise ready"))
// promise.then(result => console.log(result)); // shows "result" after 2 seconds

// A finally handler “passes through” the result or error to the next suitable handler.
// For instance, here the result is passed through finally to then:

// let promise7 = new Promise((resolve,reject) => {
//     setTimeout(() => resolve("run after 2 seconds"), 2000);
// })
// promise7.finally(() => console.log("Promise ready"));
// promise7.then((result) => console.log(result)); // shows "result" after 2 seconds

// That’s very convenient, because finally is not meant to process a promise result. 
// As said, it’s a place to do generic cleanup, no matter what the outcome was.


// Real world example
// And here’s an example of an error, for us to see how it’s passed through finally to catch:

let promise8 = new Promise((resolve,reject) => {
    throw new Error("error");
})
promise8.finally(() => console.log("Promise ready"));
promise8.catch((error) => console.log(error)); // shows "error" after 2 seconds
