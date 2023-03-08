class navBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/nav-bar/navBar.css">
        <section id="input" class="input"> 
            <img src="https://img.freepik.com/iconos-gratis/buscar_318-265146.jpg" alt="">
            <input type="text" placeholder="Search with google or use an URL">
        </section>
        `
    }
}
customElements.define('nav-bar', navBar);
export default navBar