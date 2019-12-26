let messages = new MessageList();

function generateMsgUI (obj, user) {
    var li = document.createElement('li');
    li.className = obj.sender === user ? "message left" : "message right";
    obj.deleteTimeStamp && (li.className = li.className + "delete");
    li.innerHTML += obj.message;
    li.onclick = function() {
        obj.delete();
        !this.classList.contains('delete') && this.classList.add("delete");
    }
    return li;
}

function generateChats(user) {
    var ul = document.getElementById(`messages-${user}`)       
    messages.messages.forEach(function(obj){
        ul.appendChild(generateMsgUI(obj, user));
	});
}

function pushMessageOnChatWindow(user, msg) {
    var ul = document.getElementById(`messages-${user}`);
    ul.appendChild(generateMsgUI(msg, user));
}





function openForm(user) {
    document.getElementById(`myForm-${user}`).style.display = "block";
    // generateChats(user);
  }
  
  function closeForm() {
    document.getElementById(`myForm-${user}`).style.display = "none";
  }

  function clearMsgBox(user) {
    document.getElementById(`myForm-${user}`).getElementsByTagName("input")[0].value = '';
  }


  function sendMsg(event, user, receiver) {
      event.preventDefault();
      var msg = document.getElementById(`myForm-${user}`).getElementsByTagName("input")[0].value;
      var _msg = new Message({
        message: msg,
        sender: user,
        receiver: receiver
      });
      messages.pushMessage(_msg);

      clearMsgBox(user);
      pushMessageOnChatWindow(user, _msg);
      pushMessageOnChatWindow(receiver, _msg);
  }