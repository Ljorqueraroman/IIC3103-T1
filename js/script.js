
var webSocket;

function getConnectedButton() {
    return document.getElementById("connected");
}

function getDisconnectedButton() {
    return document.getElementById("disconnected");
}

function toggleConnection(isConnected) {
    if (isConnected) {
        webSocket.close();
    }
    else {
        createSocket();
    }
}

function init() {
    let connectedButton = getConnectedButton();
    let disconnectedButton = getDisconnectedButton();

    disconnectedButton.onclick = function () {
        toggleConnection(false);
    }

    connectedButton.onclick = function () {
        toggleConnection(true);
    }

    connectedButton.style.display = "none";
}

function createSocket() {
    let connectedButton = getConnectedButton();
    let disconnectedButton = getDisconnectedButton();

    let socket = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");

    socket.onopen = function (e) {
        alert("Connected!")
        connectedButton.style.display = 'block';
        disconnectedButton.style.display = 'none';
    }

    socket.onclose = function (event) {
        alert("Disconnected...")
        connectedButton.style.display = 'none';
        disconnectedButton.style.display = 'block';
        webSocket = null;
    }

    socket.onmessage = function (event) {
        let message = event.data;

        let messageElem = document.createElement('div');
        messageElem.textContent = message;

        document.getElementById('messages').prepend(messageElem);
    }

    socket.onerror = function (event) {
    }

    webSocket = socket;
}

//#region Setup map
var map = L.map('map', {
    center: [0, 0],
    zoom: 3
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



//#endregion

function addMessage(message) {
    var chatContainer = document.getElementById('chat-messages');


}



init();
