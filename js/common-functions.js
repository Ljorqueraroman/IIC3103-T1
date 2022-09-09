
// #region Get Element

function getConnectedButton() {
    return document.getElementById("connected");
}

function getDisconnectedButton() {
    return document.getElementById("disconnected");
}

function getMessageContainer() {
    return document.getElementById('message-list');
}

// #endregion

// #region Chat Functions

function getTimeStamp() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    return "[" + hours + ":" + minutes + "]: ";
}

function addChatMessage(message) {
    var messageElem = document.createElement("div");
    messageElem.className = "chat-message";
    messageElem.textContent = getTimeStamp() + message;

    var chatContainer = getMessageContainer();
    chatContainer.append(messageElem);
}

// #endregion


