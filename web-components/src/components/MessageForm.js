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
      const newMessage = document.createElement('custom-message');

      newMessage.$messageText.innerText = tempMessage.text;
      newMessage.text = tempMessage.text;

      let hours = tempMessage.time[0];
      let minutes = tempMessage.time[1];
      hours = (hours < 10) ? (`0${hours}`) : hours;
      minutes = (minutes < 10) ? (`0${minutes}`) : minutes;
      newMessage.$messageTime.innerText = `${hours}:${minutes}`;
      newMessage.time = `${hours}:${minutes}`;

      newMessage.build();

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
