class settingBtn extends HTMLElement{
    static get observerAttributes(){
        return["imag"]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = "../src/components/setting-btn/setting-btn.css"
        const span = document.createElement('span')
        const button = document.createElement('button')
        const img = document.createElement('img')
        img.setAttribute("src", "../../../dist/.pngs/settings.png")

        button.appendChild(img)
        span.appendChild(button)

        this.shadowRoot.appendChild(link);
        this.shadowRoot.appendChild(span)
    }    
}
customElements.define('setting-btn', settingBtn)
export default settingBtn;