class MobileNavBar {

    constructor(mobileMenu, navList, navLink) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelectorAll(navLink);
        this.activeClass = "active";
    }


    addClickEvent() {
        // Adicionar evento de click no menu-hamburguer
        this.mobileMenu.addEventListener(
            "click",
            () => {
                // Aparecer a navList
                this.navList.classList.toggle(this.activeClass);
                // Transformar em X o menu
                this.mobileMenu.classList.toggle(this.activeClass);
                // Animar os links
                this.animatedLinks();
            }
        );

    }

    animatedLinks() {
        // Verificar a existencia da animação
        this.navLink.forEach((link, index) => {
            

            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade .3s ease forwards ${index / 7 + .3}s`);
        });
    }

    init() {
        //verificar se o mobile-menu existe no document
        if (this.mobileMenu) {
            this.addClickEvent();
        }
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavBar.init();

