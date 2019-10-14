const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            display: flex;
            flex-direction: row;
            width: 100%;
        }

        .messages-container {
            display: flex;
            flex-direction: column;
            height: calc(100vh - 102px);
            overflow-y: scroll;
            background-color: #eee;
        }

        .message {
            display: inline-flex;
            flex-direction: column;
            max-width: 25%;
            min-width: 5%;
            margin-left: auto;
            margin-right: 0em;
            margin-top: 10px;
            border: solid grey 1px;
            border-radius: 5px;
            padding: 11px;
            background-color: #8e24aa25;
            color: #000000;
        }

        .message-text {
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding: 3px 3px;
            font-size: 17px;
            word-wrap: break-word;
            word-break: break-word;
            color: black;
        }

        .message-time {
            align-self: flex-end;
            color: #777;
            font-size: 11px;
            line-height: 13px;
            margin-right: 3px;
            user-select: none;
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
        </div>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');

    this.$messagesContainer = this.shadowRoot.querySelector('.messages-container');
    this.$sendButton = this.$input.$sendButton;

    // Fucking saved!
    this.$dialogId = '1488';
    this.$messagesArray = JSON.parse(localStorage.getItem(this.$dialogId));

    if (this.$messagesArray === null) {
      this.$messagesArray = [];
    }

    this.loadMessages();

    this.$sendButton.addEventListener('click', this.onSubmitClicked.bind(this));
    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
    this.$form.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  onSubmitClicked() {
    this.$form.dispatchEvent(new Event('submit'));
    this.$sendButton.style.visibility = 'hidden';
    this.$input.$input.focus();
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value !== '') {
      this.addMessage(this.messageGenerator(this.$input.value));
    }

    this.$input.value = '';
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      if (this.$input.value !== '') {
        this.addMessage(this.messageGenerator(this.$input.value));
      }

      this.$input.value = '';
    }
  }

  onKeyUp() {
    this.$sendButton.style.marginLeft = '5px';
    this.$sendButton.style.visibility = 'inherit';

    if (this.$input.value === '') {
      this.$sendButton.style.visibility = 'hidden';
    }
  }

  messageGenerator(fuckingText) {
    if (localStorage.getItem('counter') === null) {
      localStorage.setItem('counter', 0);
    } else {
      localStorage.counter += 1;
    }

    const messageTime = new Date();

    const generatedMessage = {
      name: 'George',
      text: fuckingText,
      time: [messageTime.getHours(), messageTime.getMinutes()],
    };

    this.$messagesArray.push(generatedMessage);
    localStorage.setItem(this.$dialogId, JSON.stringify(this.$messagesArray));

    return generatedMessage;
  }

  addMessage(tempMessage) {
    if (typeof tempMessage !== 'undefined') {
      const newMessage = document.createElement('div');
      newMessage.className = 'message';

      const messageText = document.createElement('div');
      messageText.className = 'message-text';
      messageText.innerText = tempMessage.text;
      newMessage.appendChild(messageText);

      const messageTime = document.createElement('div');
      let hours = tempMessage.time[0];
      let minutes = tempMessage.time[1];
      hours = (hours < 10) ? (`0${hours}`) : hours;
      minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
      messageTime.className = 'message-time';
      messageTime.innerHTML = `<div>${hours}:${minutes}</div>`;
      newMessage.appendChild(messageTime);

      this.$messagesContainer.appendChild(newMessage);
      newMessage.scrollIntoView();
    }
  }

  loadMessages() {
    for (let i = 0; i <= this.$messagesArray.length; i += 1) {
      this.addMessage(this.$messagesArray[i]);
    }
  }
}

customElements.define('message-form', MessageForm);
