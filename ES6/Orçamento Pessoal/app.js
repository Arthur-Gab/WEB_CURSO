import { Modal } from './modal.js';

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
            this.searchExpense);
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
            this.Storage = new Storage(this.Expense.toObjLiteral());
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

    }

    searchExpense() {

        // Recuperar o valor dos inputs e retornar eles na table como uma despesa
        this.Expense = new Expense(
            "#day",
            "#month",
            "#year",
            "#type",
            "#description",
            "#cost"
        );

        this.Storage = new Storage(this.Expense);
        this.Storage.filterExpense();
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
        this.day = document.querySelector(day);
        this.month = document.querySelector(month);
        this.year = document.querySelector(year);
        this.type = document.querySelector(type);
        this.description = document.querySelector(description);
        this.cost = document.querySelector(cost);
    }

    validate() {
        if (this.day.value === "" || isNaN(this.day.value) || this.month.value === "" || this.year.value === "" || this.type.value === "" || this.description.value === "" || this.cost.value === "" || isNaN(this.cost.value))
            return false

        return true
    }

    error() {

        // retornar o obj a ser focado
        let error = null;
        if (this.day.value === "" || isNaN(this.day.value))
            error = this.day;
        else if (this.month.value === "")
            error = this.month;
        else if (this.year.value === "")
            error = this.year;
        else if (this.type.value === "")
            error = this.type;
        else if (this.description.value === "")
            error = this.description;
        else if (this.cost.value === "" || isNaN(this.cost.value))
            error = this.cost;

        return error;
    }

    clearInput() {
        this.day.value = "";
        this.month.value = "";
        this.year.value = "";
        this.type.value = "";
        this.description.value = "";
        this.cost.value = "";
    }

    toObjLiteral() {
        // Return the values of the Expense for recording in the localStorage
        const day = this.day.value;
        const month = this.month.value;
        const year = this.year.value;
        const type = this.type.value;
        const description = this.description.value;
        const cost = this.cost.value;

        const pseudoExpense = {
            day,
            month,
            year,
            type,
            description,
            cost
        }

        return pseudoExpense;
    }
}

class Storage {
    constructor(Expense) {
        // For recording this.Expense is an objLiteral
        // For recording this.Expense is a class Expense
        this.Expense = Expense;
        this.listOfExpenses = document.querySelector("#list-expenses");
    }

    recordExpense() {
        // Record Expenses in Local Storage as a Obj Literal;
        localStorage.setItem(this.getIndex(), JSON.stringify(this.Expense));
        console.log(this.Expense);
    }

    filterExpense() {
        // Get the values of the inputs and search in local storage for an Expense compatible
        // it's necessary the input year is filled at least
        // const day = this.Expense.day.value;
        // const month = this.Expense.month.value;
        // const year = this.Expense.year.value;
        // const type = this.Expense.type.value;
        // const description = this.Expense.description.value;
        // const cost = this.Expense.cost.value;
        let expenses = Array();

        for (let i = 1; expenses.length < localStorage.length; i++) {

            let expense = JSON.parse(localStorage.getItem(i));

            if (expense === null)
                continue;

            expenses.push(expense);
        }

        // <tr>
        //     <td id="table-date">12/03/2020</td>
        //     <td id="table-type">Education</td>
        //     <td id="table-description">Mensalidade Facu</td>
        //     <td id="table-cost">1200</td>
        //     <td id="td-closer">
        //         <button id="tr-closer" class="btn closer">
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        //                 <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        //                 <path
        //                     d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        //             </svg>
        //         </button>
        //     </td>
        // </tr>

        expenses.forEach((e) => {
            
            // Creating <tr>
            let row = this.listOfExpenses.insertRow();

            // Creating <td>
            row.insertCell(0).innerHTML = `${e.day}/${e.month}/${e.year}`;
            row.insertCell(1).innerHTML = `${e.type}`;
            row.insertCell(2).innerHTML = `${e.description}`;
            row.insertCell(3).innerHTML = `R$ ${e.cost}`;

        })
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

