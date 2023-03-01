class appCubes extends HTMLElement {
    static get observedAttributes(){
        return[];
    }
    constructor(){
        super();
        console.log("traido")
        this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render(){

        const images = [
            "../../../dist/.pngs/deepl.png",
            "../../../dist/.pngs/deepl.png",
            "../../../dist/.pngs/deepl.png"
        ]


        const misMarcadores = document.getElementById("marcadores")

        

        for (let index = 0; index < images.length; index++) {
            const element = array[index];
        }

        this.shadowRoot.innerHTML = `<h1> FireFox </h1> ${""}`
    }
}

customElements.define("app-cubes", appCubes);