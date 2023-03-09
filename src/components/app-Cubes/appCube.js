import data from "./data.js"


class appCubes extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    constructor() {
        super();
        console.log("traido")
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {

        let htmlContent = "";

        data.forEach((data) => {
            htmlContent += 
            `<div id="marcador" class="marcador"> 
            <img src="${data.thumbnail}" alt=""> 
            <h6>${data.name}</h6>
            </div>
            `  
        })

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="../src/components/app-Cubes/appCube.css">
        <div id = "marcadores" class="marcadores">
        ${htmlContent}
        </div>

`

    }

}

customElements.define("app-cubes", appCubes);
export default appCubes