'use strict';

let myPromise = () => {
    //return new Promise(()=>{})
    return new Promise((resolve, reject) => { resolve('resolution'); reject('rejection'); })
}

console.log(myPromise().toString());
myPromise()
    .then(resp => { console.log(resp) })
    .catch(err => { console.log(err) });
{/* A resolution from a Promise is handled in the then method */ }

let myRejectedPromise = () => {
    return new Promise((resolve, reject) => { reject('I am rejecting the promise!!') })
}


console.log(myRejectedPromise().toString());
myRejectedPromise()
    .then(response => { console.log(response) })
    .catch(error => { console.log(error) });
{/* A rejection from a Promise is handled in the catch method */ }

console.log('....')



