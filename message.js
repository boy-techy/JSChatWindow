function Message(obj) {
    this.message = obj.message;
    this.timestamp = +new Date();
    this.sender = obj.sender;
    this.receiver = obj.receiver;

    this.delete = function() {
        this.deleteTimeStamp = +new Date();
    }
}

function MessageList() {
    //To Maintain a message and reuse in factory while converting from localstorage
    this.messages = [];
    
    //Message should be of Message type
    this.pushMessage = function(message) {
        this.messages.push(message);
    }
}