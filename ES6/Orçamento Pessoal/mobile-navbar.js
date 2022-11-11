class MobileMenu {
    constructor(menu, list, links) {
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(list);
        this.navLinks = document.querySelector(links);
        this.activeClass = "active";
    }

    addEventClick() {
        this.menu.addEventListener("click",
            () => {
                this.menu.classList.toggle(this.activeClass);
                this.navList.classList.toggle(this.activeClass);
            });

    }

    init() {
        if (this)
            this.addEventClick();
    }
}

const menu = new MobileMenu(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
menu.init();


