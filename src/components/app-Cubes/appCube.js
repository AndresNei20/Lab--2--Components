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
        data.forEach((data) => {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="../src/components/app-Cubes/appCube.css">
            <section id="marcador" class="marcador">
             <img src="${data.thumbnail}" alt="">
             <h6>${data.name}</h6>
            </section>


    `

        })



    }

    //   for (let i = 0; i < images.length; i++) {
    //     htmlContenido += `
    //       <section id="marcador" class="marcador">
    //         <img src="${images[i]}" alt="">
    //       </section>
    //     `;
    //   } 
    //   this.shadowRoot.innerHTML = `
    //   
    //   <div id="marcadores" class="marcadores">
    //   ${htmlContenido}; 

}

customElements.define("app-cubes", appCubes);
export default appCubes