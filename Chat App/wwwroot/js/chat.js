class Message {
    constructor(username, text, date) {
        this.userName = username;
        this.text = text;
        this.date = date;
    }
}

// userName is declared in razor page.
const username = userName;
const textInput = document.getElementById('messageText');
const dateInput = document.getElementById('date');
const chat = document.getElementById('chat');
const messagesQueue = [];

document.getElementById('submitButton').addEventListener('click', () => {
    var currentdate = new Date();

});

function clearInputField() {
    messagesQueue.push(textInput.value);
    textInput.value = "";
}

function sendMessage() {
    let text = messagesQueue.shift() || "";
    if (text.trim() === "") return;
    let message = new Message(username, text);
    sendMessageToHub(message);
}

function addMessageToChat(message) {
    let isCurrentUserMessage = message.userName === username;

    let container = document.createElement('div');
    container.className = isCurrentUserMessage ? "container darker" : "container";

    let sender = document.createElement('p');
    sender.className = "sender";
    sender.innerHTML = message.userName;
    let text = document.createElement('p');
    text.innerHTML = message.text;

    let date = document.createElement('span');
    date.className = isCurrentUserMessage ? "time-left" : "time-right";
    var currentdate = new Date();
    date.innerHTML = 
        (currentdate.getMonth() + 1) + "/"
        + currentdate.getDate() + "/"
        + currentdate.getFullYear() + " "
        + currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    container.appendChild(sender);
    container.appendChild(text);
    container.appendChild(date);
    chat.appendChild(container);
}
