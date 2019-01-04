let EventBus = ['onkeydown'];

class HTMLEvents {
    buttonclick(event){}
    onkeydown(){
        console.log('In a function')
    }
}



let anEvent = new HTMLEvents().buttonclick(()=>{})

// event

export default HTMLEvents
