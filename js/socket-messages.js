

function sendJoinMessage(socket) {
    var message = JSON.stringify(
        {
            type: "join",
            id: "075e1460-99b1-4307-a46a-967c9557565d",
            username: "LJ"
        }
    );
    socket.send(message);
}

function sendChatMessage(socket, chatMessage) {

    var message = JSON.stringify(
        {
            type: "chat",
            content: chatMessage
        }
    );
    socket.send(message);
}

function processSocketEvent(eventMessage) {
    var parsedMessage = JSON.parse(eventMessage);
    var type = parsedMessage["type"];

    if (type === "flights") {
        console.log(eventMessage);
        return processFlightEvent(parsedMessage);
    }
        
    if (type === "plane")
        return processPlaneEvent(parsedMessage);
    if (type === "takeoff")
        return processTakeOffEvent(parsedMessage);
    if (type === "landing")
        return processLandingEvent(parsedMessage);
    if (type === "message")
        return processMessageEvent(parsedMessage);

}

function processFlightEvent(parsedMessage) {

    var flights = parsedMessage["flights"];

    var nFlights = Object.keys(flights).length;

    for (var key in flights) {
        var flight = flights[key];

        var id = flight["id"];
        var departure = flight["departure"];
        var destination = flight["destination"];
        var location = flight["location"];
        
    }
    addChatMessage("FLIGHT " + nFlights);
}

function processPlaneEvent(parsedMessage) {
    //addChatMessage("PLANE")
}

function processTakeOffEvent(parsedMessage) {
    addChatMessage("TAKEOFF")
}

function processLandingEvent(parsedMessage) {
    addChatMessage("LANDING")
}

function processMessageEvent(parsedMessage) {
    addChatMessage("MESSAGE")
}

function clearMap() {

}
