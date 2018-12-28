
/*class Queue {
    constructor(messages) {
        this.messages = messages
    }
    addMessage(message) { this.messages.push(message) }
    removeLastMessage() { this.messages.pop() }
    getQueueCount() { return this.messages.length }

}*/

let Queue = () => {
    let instance
    let createInstance = () => { return new Object() }
    let getInstance = () => { if (instance === 'undefined') { instance = createInstance(); console.log(instance); } return instance }
    return getInstance
}

let queue=Queue()();
console.log(queue)

class MessageFactory {
    constructor() {
        this.message = { size: Math.random() }
    }
    getMessage() { return this.message }
}

class Publisher {
    constructor(name, queue) {
        this.name = name
        this.queue = queue
    }
    addMessageToQueue(message, myQueue) { myQueue.addMessage(message) }
}

class PublisherSubscriber {
    constructor(publisher) {
        this.publisher = publisher
    }
    createNewQueue() { return Queue()() }

}

let startPubSub = () => {
    console.log(Queue()())

    let firstQueue = new PublisherSubscriber().createNewQueue()
    let publisherOne = new Publisher('firstPublisher', firstQueue)
    let msg1 = new MessageFactory().getMessage()
    let msg2 = new MessageFactory().getMessage()
    let msg3 = new MessageFactory().getMessage()
    let msg4 = new MessageFactory().getMessage()
    let msg5 = new MessageFactory().getMessage()

    publisherOne.addMessageToQueue(msg1, firstQueue)
    publisherOne.addMessageToQueue(msg2, firstQueue)
    publisherOne.addMessageToQueue(msg3, firstQueue)
    publisherOne.addMessageToQueue(msg4, firstQueue)
    publisherOne.addMessageToQueue(msg5, firstQueue)

    let currQueueSize=firstQueue.getQueueCount();
    console.log(currQueueSize)
    firstQueue.removeLastMessage()
    currQueueSize=firstQueue.getQueueCount();
    console.log(currQueueSize)

    for(let i=0;i<100000;i++){
        publisherOne.addMessageToQueue(new MessageFactory().getMessage(), firstQueue)
    }
    currQueueSize=firstQueue.getQueueCount();
    console.log(currQueueSize)
    console.log(firstQueue)
}

startPubSub()

