let Queue = {
    message : {size:Math.random()},
    messages : [],
    addMessage : function (message) {return this.messages.push(message)},
    removeLastMessage : function () {return this.messages.pop()}
}

Queue.addMessage({size:10})
Queue.addMessage({size:20})
Queue.addMessage({size:30})
Queue.addMessage({size:40})
Queue.addMessage({size:50})

console.log(Queue);

Queue.removeLastMessage();
Queue.removeLastMessage();

console.log(Queue);

