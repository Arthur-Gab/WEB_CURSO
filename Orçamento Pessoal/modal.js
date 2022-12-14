export class Modal {
    constructor(modal, closeX, closeBtn) {
        this.modal = document.querySelector(modal);
        this.closeX = document.querySelector(closeX);
        this.closeBtn = document.querySelector(closeBtn);
        this.active = "active";
    }

    addEventClick() {
        this.closeX.addEventListener("click", () => {
            this.modal.classList.remove(this.active);
        });
        this.closeBtn.addEventListener("click", () => {
            this.modal.classList.remove(this.active);
        });
    }

    display() {
        this.modal.classList.add(this.active);
    }

    init() {
        if (this) {
            this.display();
            this.addEventClick();
        }
    }
}