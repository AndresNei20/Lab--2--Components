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
        this.shadowRoot.innerHTML= ` 
        <setting-btn></setting-btn>
        <logo-name></logo-name>
        <nav-bar></nav-bar>
        <app-cubes></app-cubes>
        
        `
    }

}
customElements.define('app-container',AppContainer)
