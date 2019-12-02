const template = document.createElement('template');
template.innerHTML = `
  <style>
    .svg-icon path,
    .svg-icon polygon,
    .svg-icon rect {
      fill: white;
    }
    
    .svg-icon circle {
      stroke: white;
      stroke-width: 1;
    }

    .chat-header {
      height: 100%;
      width: 100%;
      display: none;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .chats-header {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    button {
      display: inline-block;
      height: 6vh;
      width: 6vh;
      color: #fffc;
      background-color: #8e24aa;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 100%;
      transition: 0.2s;
      margin: 3%;
    }

    button:focus {
      color: #FFFF;
    }

    button:hover {
      background-color: #0002;
      animation-name: button-hover-animation;
      animation-duration: 0.4s;
      animation-timing-function: linear;
    }

    button:active {
      background: #0005;
    }
      
    .button-img {
      height: 3vh;
      width: 3vh;
      fill: currentColor;
    }
      
    .header {
      line-height: 5vh;
      font-weight: 600;
      font-size: 6vh;
      color: white;
    }
      
    .buddy {
      height: 100%;
      flex-grow: 15;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
      
    .buddy-image {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 2vh;
    }
      
    .buddy-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
    }
      
    .buddy-name {
      max-width: 40vw;
      overflow-x: hidden;
      line-height: 4vh;
      font-weight: bold;
      font-size: 3vh;
      color: #fffc;
    }
      
    .buddy-status {
      font-size: 2vh;
      font-weight: 200;
      color: #d1a7dd;;
      align-self: center;
    }
      
    .buddy_logo {
      fill: currentColor;
    }

    @keyframes button-hover-animation {
      0% {
        box-shadow: 0px 0px 0 6vh inset #8E24AA;
      }
      100% {
        box-shadow: 0px 0px 0 0 inset #8E24AA;
      }
    }
  </style>
    
  <div class="chats-header">
    <button class="button-menu">
      <svg class="button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408" xml:space="preserve">
        <rect y="102" width="408" height="40"/>
        <rect y="204" width="408" height="40"/>
        <rect y="306" width="408" height="40"/>
      </svg>
    </button>
    <span class="header">VanDarkCall</span>
    <button class="button-search-chats">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
      </svg>
    </button>
  </div>

  <div class="chat-header">
    <button class="button-backward">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
      </svg>
    </button>
    <div class="buddy">
      <div class="buddy-image">
        <svg version="1.1" class="buddy_logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55 55" width="7vh" height="7vh" fill="white" xml:space="preserve">
          <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
                  c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
                  c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
                  c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
                  c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
                  c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
                  c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
                  c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
                  c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
                  l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
                  c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
                  c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
                  c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.52,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
                  s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
                  c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
                  c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z"/>
        </svg>
      </div>
      <div class="buddy-info">
        <span class="buddy-name"></span>
        <span class="buddy-status">был(а) N минут назад</span>
      </div>
    </div>
    <button class="button-search-chat">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
      </svg>
    </button>
    <button class="button-settings">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M10,2.172c-4.324,0-7.828,3.504-7.828,7.828S5.676,17.828,10,17.828c4.324,0,7.828-3.504,7.828-7.828S14.324,2.172,10,2.172M10,17.004c-3.863,0-7.004-3.141-7.004-7.003S6.137,2.997,10,2.997c3.862,0,7.004,3.141,7.004,7.004S13.862,17.004,10,17.004M10,8.559c-0.795,0-1.442,0.646-1.442,1.442S9.205,11.443,10,11.443s1.441-0.647,1.441-1.443S10.795,8.559,10,8.559 M10,10.619c-0.34,0-0.618-0.278-0.618-0.618S9.66,9.382,10,9.382S10.618,9.661,10.618,10S10.34,10.619,10,10.619 M14.12,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.647,1.443,1.442,1.443s1.442-0.647,1.442-1.443S14.915,8.559,14.12,8.559 M14.12,10.619c-0.34,0-0.618-0.278-0.618-0.618s0.278-0.618,0.618-0.618S14.738,9.661,14.738,10S14.46,10.619,14.12,10.619 M5.88,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.646,1.443,1.442,1.443S7.322,10.796,7.322,10S6.675,8.559,5.88,8.559 M5.88,10.619c-0.34,0-0.618-0.278-0.618-0.618S5.54,9.382,5.88,9.382S6.498,9.661,6.498,10S6.22,10.619,5.88,10.619"></path>
      </svg>
    </button>
  </div>
`;

class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.$main_window = document.querySelector('.main-window');
    this.$chats_list = document.querySelector('my-chats');

    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));


    this.$chatHeader = this.shadowRoot.querySelector('.chat-header');
    this.$chatsHeader = this.shadowRoot.querySelector('.chats-header');

    this.$button_menu = this.$chatsHeader.querySelector('.button-menu');
    this.$header = this.$chatsHeader.querySelector('.header');

    this.$button_backward = this.$chatHeader.querySelector('.button-backward');
    this.$button_search = this.$chatHeader.querySelector('.button-search-chat');
    this.$button_settings = this.$chatHeader.querySelector('.button-settings');
    this.$buddy = this.$chatHeader.querySelector('.buddy');
    this.$buddy_name = this.$chatHeader.querySelector('.buddy-name');

    this.$button_backward.addEventListener('click', this.onBackwardClicked.bind(this));
  }

  onBackwardClicked() {
    this.$chatsHeader.style.display = 'flex';
    this.$chatHeader.style.display = 'none';
    this.$chats_list.chatsRender();
    this.$main_window.removeChild(this.$main_window.lastChild);
    this.$main_window.querySelector('.create-dialog').style.display = 'inline-block';
    this.$chats_list.style.display = 'flex';
  }
}

customElements.define('main-header', MainHeader);
