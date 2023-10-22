setTimeout(() => console.log("Say Hi!"), 5000);

let promise = Promise.resolve("Got this promise");
promise.then(value => console.log(value));

new Promise((resolve, reject) => reject(new Error("Fail")))
.then(res => console.log("Handler 1"))
.catch(err => {
console.log("Caught failure " + err);
return "nothing";
})

function resolveAfter2Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved');
    }, 2000);
    });
    }
    async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
    }
    asyncCall()

let promise2 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("done"),2000);
    });

promise2
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        });
    console.log("This message first")