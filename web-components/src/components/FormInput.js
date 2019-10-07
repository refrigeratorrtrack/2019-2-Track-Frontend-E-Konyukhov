const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: solid black 3px;
            outline: none;
            width: calc(100% - 6px);
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
    </style>
    <input type="text">
`;

class FormInput extends HTMLElement {
    constructor () {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
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
