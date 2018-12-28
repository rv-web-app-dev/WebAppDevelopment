
let Singleton = () => {
    let instance
    let createInstance = () => { return new Object('This is my new instance') }
    let getInstance = () => { if (instance === 'undefined') { console.log('..'); instance = createInstance() } return instance }
    return getInstance
}

let s1=Singleton()();
let s2=Singleton()();
console.log(s1===s2)
console.log(s1);
