import { Modal } from './modal.js';
import { Expense } from './expense.js';
import { Storage } from './storage.js';

class UserCreatOrFinderExpense {
    constructor(register, finder) {
        this.register = document.querySelector(register);
        this.finder = document.querySelector(finder);
        this.Expense = new Expense(
            "#day",
            "#month",
            "#year",
            "#type",
            "#description",
            "#cost"
        );
        this.Storage = new Storage(this.Expense);
    }

    addEventClickerIndex() {
        // Put click events for Index.html here
        this.register.addEventListener("click",
            () => {
                // Register Expenses on LocalStorage
                // Validation of values
                if (this.Expense.validate()) {

                    // Valores validos - grava no Local Storage a Expense
                    this.Storage.recordExpense();
                    this.Expense.clearInput();
                } else {

                    // Valores Invalidos - Aparece um Modal centralizado
                    const MODAL = new Modal(
                        ".modal",
                        ".btn-close",
                        ".btn-txt-close"
                    );
                    MODAL.init();

                    this.Expense.error().focus();
                }
            });
    }

    addEventClickerConfer() {
        // Put click events for Confer.html here

        // Filter Expenses on Local Storage and display that in the table body
        this.finder.addEventListener("click",
            () => {
                // Recuperar o valor dos inputs e retornar eles na table como uma despesa
                this.Storage.filterExpense();
            });
    }

    init() {
        if (this.register)
            this.addEventClickerIndex();
        if (this.finder)
            this.addEventClickerConfer();
    }
}

const USER = new UserCreatOrFinderExpense(
    "#confirm-cost",
    "#finder-cost"
);

USER.init();

