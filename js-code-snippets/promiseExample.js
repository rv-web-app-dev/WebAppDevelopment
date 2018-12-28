/**
 * A function that loops a certain number of time doing an I/O ops : console logging returning a promise.
 * @param loops : A number that controls the times that the inner for loop iterates. Default=10
 * @param limit : The max number of loops to execute. Default=10000
 * @returns Promise: resolve with message is loops<limit, else reject with message.
 */
let aLongRunningFunction = (loops = 10, limit = 10000) => {
    return new Promise((resolve, reject) => {
        let i = 0;
        for (i = 0; i < loops; i++) {
            console.log(i)
            if (i > limit) reject(`Sorry, you are exceeding the ${limit} limit!! Hence, I am rejecting now.`)
        }
        resolve(`Whooo.. I looped for ${i} times !! I am resolving now.`)
    })
}

/** showcase of resolution: Invoke with 100 */
let valueReturnedFromFunc = aLongRunningFunction(100)
valueReturnedFromFunc.then(resp => { console.log(resp) })

/** showcase of rejection: Invoke with 1M */
let _1MLoop = aLongRunningFunction(1000000)
_1MLoop.then(resp => { console.log(resp) })
_1MLoop.catch(resp => { console.log(resp) })
