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
            <img class="logo-image" src="chrome://branding/content/about-logo.png" alt="">
            <h1> FireFox </h1>
        </section>
        `
    }
}
export default logoName;