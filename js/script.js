
var webSocket;
var map;

function toggleConnection(isConnected) {
    if (isConnected) {
        webSocket.close();
    }
    else {
        webSocket = createSocket();
    }
}

function init() {
    map = createMap()

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

    connectedButton = getConnectedButton();
    disconnectedButton = getDisconnectedButton();

    socket = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");

    socket.onopen = function (e) {
        addChatMessage("Connected!")
        connectedButton.style.display = 'block';
        disconnectedButton.style.display = 'none';

        sendJoinMessage(socket);
    }

    socket.onclose = function (event) {
        addChatMessage("Disconnected.")
        connectedButton.style.display = 'none';
        disconnectedButton.style.display = 'block';
        webSocket = null;
    }

    socket.onmessage = function (event) {
        processSocketEvent(event.data);
    }

    socket.onerror = function (event) {
        addChatMessage("CONNECTION ERROR")
    }

    return socket
}

function createMap() {
    var map = L.map('map-container', {
        center: [0, 0],
        zoom: 3
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    return map;
}

init();
