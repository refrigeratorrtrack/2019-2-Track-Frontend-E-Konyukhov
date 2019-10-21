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

        .dialog-header {
            height: 60px;
            width: 100%;
            background-color: #8e24aa;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 0 0 5px 2px;
        }

        .buddy {
            eight: 100%;
            width: calc(100% - 200px);
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .search,
        .back,
        .settings {
            width: 60px;
            display: inline-block;
            cursor: pointer;
            border-radius: 100%;
            transition: 0.2s;
            fill: white;
        }

        .buddy-pic {            
            background-image: url(https://pbs.twimg.com/profile_images/894257549108801538/y_2QBDHD_400x400.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            width: 60px;
            display: inline-block;
            border-radius: 100%;
            cursor: pointer;
        }

        .search:focus, .search:hover,
        .back:focus, .back:hover,
        .settings:focus, .settings:hover {
            background: rgba(255,255,255,.2);
        }

        .search:active,
        .back:active,
        .settings:active {
            background: rgba(255,255,255,.4);
        }

        .buddy-information {
            height: 100%;   
            display: flex;
            flex-direction: column;
            justify-content: center;
            user-select: none;
        }

        .buddy-information_name {
            line-height: 30px;
            font-size: 30px;
            color: white;
        }
        
        .buddy-information_time {
            font-size: 14px;
            color: #d1a7dd;
            align-self: center;
        }
    </style>
    <div class="dialog-header">
        <div class="back">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
            </svg>
        </div>
        <div class="buddy">
            <div class="buddy-pic">
                <!--svg class="svg-icon" viewBox="0 0 20 20">
                    <circle fill="none" cx="7.884" cy="11.397" r="0.699"></circle>
                    <circle fill="none" cx="12.076" cy="11.397" r="0.699"></circle>
                    <path fill="none" d="M17.685,5.808c-0.257,0-0.502,0.053-0.73,0.139C16.64,2.737,13.649,0.219,10,0.219c-3.649,0-6.64,2.518-6.955,5.728c-0.228-0.086-0.473-0.139-0.73-0.139c-1.153,0-2.096,0.943-2.096,2.096v3.493c0,1.153,0.943,2.096,2.096,2.096c0.28,0,0.547-0.058,0.792-0.158c0.113,1.088,0.304,1.795,0.585,2.254c0.539,0.834,4.139,4.192,6.288,4.192c2.149,0,5.751-3.361,6.272-4.167c0.292-0.476,0.488-1.196,0.602-2.296c0.255,0.112,0.536,0.175,0.831,0.175c1.153,0,2.096-0.943,2.096-2.096V7.904C19.781,6.751,18.838,5.808,17.685,5.808zM15.078,14.855c-0.482,0.746-3.715,3.529-5.099,3.529s-4.616-2.783-5.097-3.525c-0.319-0.521-0.444-1.919-0.489-3.297c0.004-0.055,0.017-0.108,0.017-0.164V8.603c0-0.04,0.005-0.078,0.006-0.118C4.779,8.56,5.156,8.603,5.545,8.603c1.994,0,3.706-1.037,4.455-2.519c0.749,1.482,2.461,2.519,4.455,2.519c0.389,0,0.766-0.043,1.128-0.118c0.001,0.039,0.006,0.078,0.006,0.118c0,0.077-0.008,0.152-0.012,0.229C15.598,10.276,15.641,13.938,15.078,14.855z"></path>
                </svg-->
            </div>
            <div class="buddy-information">
                <span class="buddy-information_name">Van Darkholme</span>
                <span class="buddy-information_time">был 2 часа назад</span>
            </div>
        </div>
        <div class="search">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg>
        </div>
        <div class="settings">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M10,2.172c-4.324,0-7.828,3.504-7.828,7.828S5.676,17.828,10,17.828c4.324,0,7.828-3.504,7.828-7.828S14.324,2.172,10,2.172M10,17.004c-3.863,0-7.004-3.141-7.004-7.003S6.137,2.997,10,2.997c3.862,0,7.004,3.141,7.004,7.004S13.862,17.004,10,17.004M10,8.559c-0.795,0-1.442,0.646-1.442,1.442S9.205,11.443,10,11.443s1.441-0.647,1.441-1.443S10.795,8.559,10,8.559 M10,10.619c-0.34,0-0.618-0.278-0.618-0.618S9.66,9.382,10,9.382S10.618,9.661,10.618,10S10.34,10.619,10,10.619 M14.12,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.647,1.443,1.442,1.443s1.442-0.647,1.442-1.443S14.915,8.559,14.12,8.559 M14.12,10.619c-0.34,0-0.618-0.278-0.618-0.618s0.278-0.618,0.618-0.618S14.738,9.661,14.738,10S14.46,10.619,14.12,10.619 M5.88,8.559c-0.795,0-1.442,0.646-1.442,1.442s0.646,1.443,1.442,1.443S7.322,10.796,7.322,10S6.675,8.559,5.88,8.559 M5.88,10.619c-0.34,0-0.618-0.278-0.618-0.618S5.54,9.382,5.88,9.382S6.498,9.661,6.498,10S6.22,10.619,5.88,10.619"></path>
            </svg>
        </div>
    </div>
`;

class DialogHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('dialog-header', DialogHeader);
