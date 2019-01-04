import HTMLEvents from './EventBus'

class Publisher{
    constructor(name){
        this.name=name
    }
}

let pub1 = new Publisher('pub1');
console.log(pub1.name);

let invokeFunc1 = new HTMLEvents().onkeydown();