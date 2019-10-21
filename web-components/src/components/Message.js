const template = document.createElement('template');
template.innerHTML = `
  <style>
    .message {
      display: inline-flex;
      flex-direction: column;
      float: right;
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
    </style>
    <div class="message">
      <div class="message-text"></div>
      <div class="message-time"></div>
    </div>
`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$messageText = this.shadowRoot.querySelector('.message-text');
    this.$messageTime = this.shadowRoot.querySelector('.message-time');
  }
}

customElements.define('custom-message', Message);
