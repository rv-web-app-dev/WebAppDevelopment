

class HTMLEvents {
    buttonclick(event){}
    onkeydown(){
        console.log('In a function')
    }
}

class Publisher{
    constructor(name){
        this.name=name
    }
    publish(){

    }
}

let pub1 = new Publisher('pub1');
console.log(pub1.name);


let EventBus = ['onkeydown'];

class Subscriber{
    constructor(name){
        this.name=name
    }
    subscribe(){
        
    }
}

let events = new HTMLEvents()
let sub1 = new Subscriber('sub1');
sub1.subscribe(events.onkeydown())