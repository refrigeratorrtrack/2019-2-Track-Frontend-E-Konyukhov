const readFalse = `<svg class="tick" x="0px" y="0px" width="3vh" height="3vh" viewBox="0 0 448.8 448.8" style="fill: currentColor;" xml:space="preserve">
                <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/>
              </svg>`;
const readTrue = `<svg class="double-tick" x ="0px" y="0px" width="3vh" height="3vh" viewBox="0 0 594.149 594.149" style="fill: currentColor;" xml:space="preserve">
              <path d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z M555.899,126.225l-267.75,270.3l-107.1-107.1
              l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
            </svg>`;

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .message-text {
      color: black;
      font-size: calc(1.5vh + 10px);
      letter-spacing: 0.07em;
      word-wrap: break-word;
      word-break: break-word;
      padding-left: 0.5em;
      padding-right: 0.5em;
      padding-top: 0.02em;
      display: flex;
      align-self: flex-start;
      align-items: center;
    }
    
    .message-info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
    }

    .message-time {
      user-select: none;
      color: #777;
      font-size: 2vh;
      align-self: flex-end;
      line-height: 3vh;
      margin-right: 1vh;
    }

    .message-read-flag {
      height: 3vh;
      margin-right: 1vh;
      color: #8e24aa;
    }
  </style>

  <div class="message-text"></div>
  <div class="message-info">
    <span class="message-time"></span>
    <div class="message-read-flag"></div>
  </div>
`;

class CustomMessage extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$haveRead = false;

    this.$messageText = this.shadowRoot.querySelector('.message-text');
    this.$messageInfo = this.shadowRoot.querySelector('.message-info');
    this.$messageTime = this.$messageInfo.querySelector('.message-time');
    this.$messageReadFlag = this.$messageInfo.querySelector('.message-read-flag');
  }

  build() {
    this.$messageText.innerText = this.text;
    this.$messageTime.innerText = this.time;
    this.$haveRead = this.read;

    if (this.author === 'Me') {
      this.shadowRoot.host.className = 'custom-message my-messages';

      if (this.$haveRead === false) {
        this.$messageReadFlag.innerHTML = readFalse;
      } else if (this.$haveRead === true) {
        this.$messageReadFlag.innerHTML = readTrue;
      }
    } else {
      this.shadowRoot.host.className = 'custom-message not-my-messages';

      if (this.$haveRead === false) {
        this.$messageReadFlag.innerHTML = readFalse;
      } else if (this.$haveRead === true) {
        this.$messageReadFlag.innerHTML = readTrue;
      }
    }
  }
}

customElements.define('custom-message', CustomMessage);
