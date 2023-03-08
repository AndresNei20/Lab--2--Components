class logoName extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/logo-name/logo.css">
        <section id="logo" class="logo"> 
            <img class="logo-image" src="https://1000marcas.net/wp-content/uploads/2020/01/logo-Mozilla-Firefox.png" alt="">
            <h1> FireFox </h1>
        </section>
        `
    }
}
customElements.define('logo-name',logoName)
export default logoName;