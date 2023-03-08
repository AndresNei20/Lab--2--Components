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

    render() {
      
      
       const images = [
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/gitHub.png"
        ];
        
    
        let htmlContenido = "";

        //Se hace un for donde añado el index de mi imagen a el src de cada "marcador"
        for (let i = 0; i < images.length; i++) {
          htmlContenido += `
            <section id="marcador" class="marcador">
              <img src="${images[i]}" alt="">
            </section>
          `;
        } 
        //Añado estilos porque no los coje del link de mi html
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/app-Cubes/appCube.css">">
        <div id="marcadores" class="marcadores">
        ${htmlContenido}
    </div>`; 
      }
}

customElements.define("app-cubes", appCubes);
export default appCubes