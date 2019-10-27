const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            height: 31px;
            font-size: 17px;
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }

        .send-message {
            display: inline-block;
            width: 41px;
            visibility: hidden;
            background-color: inherit;
            cursor: pointer;
            border: none;
            outline: none;
            border-radius: 100%;
            transition: 0.3s;
            color: #8e24aa;
        }
        .send-message:active {
            background: grey;
        }

        .send-message_icon {
            height: 31px;
            width: 31px;
            padding-top: 3px;
            fill: #8e24aa;
        }

        .attach {
            display: inline-block;
            width: 41px;
            background-color: inherit;
            color: #888;
            border: none;
            border-radius: 100%;
            outline: none;
            transition: 0.3s;
            cursor: pointer;
        }
        .attach:active {
            background: grey;
        }

        .attach_icon {
            height: 31px;
            width: 31px;
            fill: grey;
        }
    </style>
    <input type="text">
    <button class="send-message">
        <svg class="svg-icon send-message_icon" viewBox="0 0 20 20">
            <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
        </svg>
    </button>
    <button class="attach">
        <svg class="svg-icon attach_icon" viewBox="0 0 20 20">
            <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
        </svg>
    </button>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
    this.$sendButton = this.shadowRoot.querySelector('.send-message');
    this.$attachButton = this.shadowRoot.querySelector('.attach');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  set value(value) {
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);
