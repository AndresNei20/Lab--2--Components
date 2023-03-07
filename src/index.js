import * as components from "./components/index.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const section = document.createElement('section');
        const logoName = document.createElement('logoName')
        section.appendChild(logoName);
        this.shadowRoot.appendChild(section);
    }

}
customElements.define('app-container',AppContainer)
