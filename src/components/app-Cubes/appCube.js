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

        // Crea un arreglo de imagenes
        const images = [
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/deepl.png",
          "../../../dist/.pngs/gitHub.png"
        ];
        
        //Crea mi variable que almacenará la injeccion de cada componente "marcaador"
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
        <style> .marcadores{
            margin-top: 100px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        
        .marcador{
            display: flex;
            width: 150px;
            height: 150px;
            box-shadow: 5px 5px 5px rgb(193 193 193);
            justify-content: center;
        }
        
        .marcador img {
            width: 100px;
            object-fit: contain;
        }
        </style>
        <div id="marcadores" class="marcadores">
        ${ //Añado mi variable que contiene cada uno de los componentes previo
            htmlContenido}
    </div>`;
      }
}

customElements.define("app-cubes", appCubes);