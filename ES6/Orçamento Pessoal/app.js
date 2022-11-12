import {Modal} from './modal.js';

class UserCreatOrFinderExpense {
    constructor(register, finder) {
        this.register = document.querySelector(register);
        this.finder = document.querySelector(finder);
        this.Expense = null;
        this.Storage = null;
    }

    addEventClickerIndex() {
        // Put click events for Index.html here
        this.register.addEventListener("click",
            this.registerExpense);
    }

    addEventClickerConfer() {
        // Put click events for Confer.html here
        this.finder.addEventListener("click",
            this.finderExpense);
    }

    registerExpense() {
        // Register Expenses
        // It is not allowed to create expense with empty values
        this.Expense = new Expense(
            "#day",
            "#month",
            "#year",
            "#type",
            "#description",
            "#cost"
        );

        // Validation of values
        if (this.Expense.validate()) {

            // Valores validos - grava no Local Storage a Expense
            this.Storage = new Storage(this.Expense);
            this.Storage.recordExpense();
        } else {

            // Valores Invalidos - Aparece um Modal centralizado
            const MODAL = new Modal(
                ".modal",
                ".btn-close",
                ".btn-txt-close"
            );
            MODAL.init();
        }


    }

    finderExpense() {
        console.log("Finder Working");
    }

    init() {
        if (this.register)
            this.addEventClickerIndex();
        if (this.finder)
            this.addEventClickerConfer();
    }
}

class Expense {
    constructor(day, month, year, type, description, cost) {
        this.day = document.querySelector(day).value;
        this.month = document.querySelector(month).value;
        this.year = document.querySelector(year).value;
        this.type = document.querySelector(type).value;
        this.description = document.querySelector(description).value;
        this.cost = document.querySelector(cost).value;
    }

    validate() {
        if (this.day === "" || isNaN(this.day) || this.month === "" || this.year === "" || this.type === "" || this.description === "" || this.cost === "" || isNaN(this.cost))
            return false

        return true
    }
}

class Storage {
    constructor(Expense) {
        this.Expense = Expense;
    }

    recordExpense() {
        // Record Expenses in Local Storage;
        localStorage.setItem(this.getIndex(), JSON.stringify(this.Expense));
    }

    getIndex() {
        return localStorage.length + 1;
    }
}

const USER = new UserCreatOrFinderExpense(
    "#confirm-cost",
    "#finder-cost"
);

USER.init();

