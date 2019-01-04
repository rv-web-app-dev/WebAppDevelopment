async function hello() {
    let response = await setTimeout(someFunc,1000)
    console.log(response)
}

let someFunc = () => {console.log('Intentional wait added is complete now.')}
let mynewFunction = () => {
    console.log(':::')
}

hello()
console.log('...')
mynewFunction()