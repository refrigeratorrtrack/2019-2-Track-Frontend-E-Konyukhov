const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }

        .messages-container {
            display: flex;
            flex-direction: column;
        }

        .message {
            display: flex;
            flex-direction: row-reverse;
            max-width: 25%;
            min-height: 30px;
            margin-left: auto;
            margin-right: 0em;
            margin-top: 10px;
            border: solid black 1px;
            border-radius: 5px;
            padding: 20px;
            background-color: #8e24aa;
            color: #000000;
            word-wrap: break-word;
        }

        .send-message {
            background-color: red;
            background-image: url(src/paper-plane-solid.svg);
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
        }

        .time-mark {
            display: flex;
            font-size: 10px;
            align-items: flex-end;
            margin-left: 5px;
        }

        .send-container {
            display: flex;
            flex-direction: row;
            position: fixed;
            bottom: 0px;
            right: 0px;
            left: 0px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="messages-container"></div>
        <div class="send-container">
            <form-input name="message-text" placeholder="Введите сообщение"></form-input>
            <button class="send-message"></button>
        </div>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$form = this.shadowRoot.querySelector('form');
        this.$input = this.shadowRoot.querySelector('form-input');
        this.$messagesContainer = this.shadowRoot.querySelector('.messages-container');
        this.$message = this.shadowRoot.querySelector('.message');
        this.$timeMark = this.shadowRoot.querySelector('.time-mark');
        this.$sendButton = this.shadowRoot.querySelector('.send-message');

        this.$messagesArray = [];

        this.loadMessages();

        this.$form.addEventListener('submit', this.onSubmit.bind(this));
        this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
    }

    onSubmit (event) {
        event.preventDefault();
        if (this.$input.value !== "") {
            this.addMessage(this.messageGenerator(this.$input.value));
        }
        this.$input.value = "";
    }

    onKeyPress (event) {
        if (event.keyCode == 13) {
            if (this.$input.value !== "") {
                this.addMessage(this.messageGenerator(this.$input.value));
            }
            this.$input.value = "";
        }
    }

    messageGenerator (text) {
        if (localStorage.getItem("counter") == null) {
            localStorage.setItem("counter", 0);
        } else {
            localStorage.counter++;
        }

        let messageTime = new Date();

        let generatedMessage = {name: "George",
                                text: text,
                                time: [messageTime.getHours(), messageTime.getMinutes()],};

        localStorage.setItem(localStorage.counter, JSON.stringify(generatedMessage));
        this.$messagesArray.push(generatedMessage);

        return generatedMessage;
    }

    addMessage (tempMessage) {
        if (typeof(tempMessage) !== "undefined") {
            let motherFucker = document.createElement('div');
            motherFucker.className = "message";
            
            let fatherFucker = document.createElement('div');
            fatherFucker.className = "time-mark";
            fatherFucker.innerHTML = `<div>${tempMessage.time[0]}:${tempMessage.time[1]}</div>`;
            motherFucker.appendChild(fatherFucker);

            let sisterFucker = document.createElement('div');
            sisterFucker.className = "text";
            sisterFucker.innerText = tempMessage.text;
            motherFucker.appendChild(sisterFucker);

            this.$messagesContainer.appendChild(motherFucker);
            // this.$messagesContainer.insertBefore(motherFucker, this.shadowRoot.querySelector('.message'));
        }
    }

    loadMessages () {
        for (let i = 0; i <= localStorage.counter; i++) {
            this.$messagesArray[i] = JSON.parse(localStorage.getItem(i));
            this.addMessage(this.$messagesArray[i]);
        }
    }
}

customElements.define('message-form', MessageForm);
