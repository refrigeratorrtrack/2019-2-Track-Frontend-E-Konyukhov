const readFalse = `<svg class="tick" x="0px" y="0px" width="2vh" height="2vh" viewBox="0 0 448.8 448.8" style="fill: currentColor;" xml:space="preserve">
                    <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/>
                  </svg>`;
const readTrue = `<svg class="double-tick" x ="0px" y="0px" width="2vh" height="2vh" viewBox="0 0 594.149 594.149" style="fill: currentColor;" xml:space="preserve">
                    <path d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
                    l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
                  </svg> `;

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
    }

    .message-text {
      display: flex;
      align-self: flex-start;
      align-items: center;
      padding: 3px 3px;
      font-size: calc(2vh + 7px);
      word-wrap: break-word;
      word-break: break-word;
      color: black;
    }

    .message-info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
    }

    .message-time {
      align-self: flex-end;
      color: #777;
      font-size: 2vh;
      line-height: 3vh;
      margin-right: 1vh;
      user-select: none;
    }

    .message-status {
      height: 3vh;
      margin-right: 1vh;
      color: #8e24aa;
    }
    </style>
    <div class="message">
      <div class="message-text"></div>
      <div class="message-info">
        <div class="message-time"></div>
        <div class="message-status"></div>
      </div>
    </div>
`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.status = false; // Means have not read
    this.$messageText = this.shadowRoot.querySelector('.message-text');
    this.$messageInfo = this.shadowRoot.querySelector('.message-info');
    this.$messageTime = this.shadowRoot.querySelector('.message-time');
    this.$messageStatus = this.shadowRoot.querySelector('.message-status');
  }

  build() {
    this.$messageText.innerText = this.text;
    this.$messageTime.innerText = this.time;

    if (this.status === false) {
      this.$messageStatus.innerHTML = readFalse;
    } else if (this.status === true) {
      this.$messageStatus.innerHTML = readTrue;
    }
  }
}

customElements.define('custom-message', Message);
