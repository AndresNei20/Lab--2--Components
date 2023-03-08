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
        <link rel="stylesheet" href="../src/index.css">
        <logo-name></logo-name>
        <nav-bar></nav-bar>
        <section id= "contenedor">
        <app-cubes></app-cubes></section>
        
        `
    }

}
customElements.define('app-container',AppContainer)
