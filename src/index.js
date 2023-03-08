import "./components/index.js"

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
        <logo-name></logo-name>
        <nav-bar></nav-bar>
        `
    }

}
customElements.define('app-container',AppContainer)
