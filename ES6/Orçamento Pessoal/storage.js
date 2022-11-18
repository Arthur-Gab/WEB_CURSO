export class Storage {
    constructor(Expense) {
        // For recording this.Expense is an objLiteral
        // For recording this.Expense is a class Expense
        this.Expense = Expense;
        this.listOfExpenses = document.querySelector("#list-expenses");
        this.expenses = null;
    }

    recordExpense() {
        // Record Expenses in Local Storage as an Obj Literal;
        localStorage.setItem(this.getIndex(), JSON.stringify(this.toObjLiteral(this.Expense)));
    }

    filterExpense() {
        // For this function i'm will recover the value of inputs filled and filter the expense i need in the expenses array
        // After, toggle the display of that expense in localStorage to active i display that in the HTML
        // The expense can't be displayed again if it is already being displayed (the display atribute is for assist that)
        console.log(this.expenses);

        // 1° Step: Get the values wich the user want, can be how many values he want (SAVE THE INPUTS FILLED AS AN ARRAY)
        const INPUTFILLEDS = this.getinputFilleds();
        console.log(INPUTFILLEDS);

        // 2° filter the expenses and get his keys in localStorage for later update the atribute display 
        const KEYS = [];

        for (let i = 0; i < localStorage.length; i++) {

            let key = localStorage.key(i);
            let expense = JSON.parse(localStorage.getItem(key));

            // this let is to define the expense has aproved on all filter that was 
            // if it's === INPUTFILLEDS.length is because it commend all the filters
            // for and exemple i'm filled year and month, so filtered = 2 means some expense has these two values
            let filtered = 0;

            for (let j = 0; j < INPUTFILLEDS.length; j++) {

                if (INPUTFILLEDS[j] === expense.day)
                    filtered++;

                if (INPUTFILLEDS[j] === expense.month)
                    filtered++;

                if (INPUTFILLEDS[j] === expense.year)
                    filtered++;

                if (INPUTFILLEDS[j] === expense.type)
                    filtered++;

                if (INPUTFILLEDS[j] === expense.description)
                    filtered++;

                if (INPUTFILLEDS[j] === expense.cost)
                    filtered++;
            }
            
            if (filtered === INPUTFILLEDS.length) {
                console.log(key, expense)
            }
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

        // this.expenses.forEach((e) => {



        //     // Creating <tr>
        //     let row = this.listOfExpenses.insertRow();

        //     // Creating <td>
        //     row.insertCell(0).innerHTML = `${e.day}/${e.month}/${e.year}`;
        //     row.insertCell(1).innerHTML = `${e.type}`;
        //     row.insertCell(2).innerHTML = `${e.description}`;
        //     row.insertCell(3).innerHTML = `R$ ${e.cost}`;

        // })
    }

    getinputFilleds() {
        const inputs = [];

        if (this.Expense.day.value !== "")
            inputs.push(this.Expense.day.value);

        if (this.Expense.month.value !== "")
            inputs.push(this.Expense.month.value);

        if (this.Expense.year.value !== "")
            inputs.push(this.Expense.year.value);

        if (this.Expense.type.value !== "")
            inputs.push(this.Expense.type.value);

        if (this.Expense.description.value !== "")
            inputs.push(this.Expense.description.value);

        if (this.Expense.cost.value !== "")
            inputs.push(this.Expense.cost.value);

        return inputs;
    }

    loadExpenses() {
        // Run on load of the page Confer
        // Creating an array of literal obj  filled with all expenses in localStorage compatible with
        this.expenses = Array();

        for (let i = 0; i < localStorage.length; i++) {

            let expense = JSON.parse(localStorage.getItem(localStorage.key(i)));
            this.expenses.push(expense);

        }
    }

    getIndex() {
        // Goal: Return the number that goes be used in the record of an Expense in Local Storage
        // Loop through the Storage location and return a progressive index from 1 to infinity, 
        // and deal with missing numbers, such as removing an expense

        // 1° localStorage has none expenses registered
        if (localStorage.length === 0) {
            return 1
        }

        // 2° LocalStorage has any expense registered
        // In this case it's possible the localStorage'keys isn't in sequence
        // For that i need to return the number most lowest possible for the new expense registering

        // Keys is an array that contains all keys from localStorage and returns me an available number
        let keys = Array();

        for (let i = localStorage.length - 1; i >= 0; i--) {
            keys.push(localStorage.key(i));
        }

        keys.sort((a, b) => {
            return a - b
        });

        // return the lowest numer key in localStorage for the new expense registering
        for (let i = 0; i < keys.length; i++) {

            // if has none expense in localStorage with key = 1
            if (parseInt(keys[i]) === 2 && keys[i - 1] === undefined) {
                return 1;
            }

            // if has an expense in localStorage with key = 1, 
            if (parseInt(keys[i]) + 1 !== parseInt(keys[i + 1])) {
                return parseInt(keys[i]) + 1
            }
        }
    }

    toObjLiteral(Expense) {
        // Return the values of the Expense for recording in the localStorage
        const day = Expense.day.value;
        const month = Expense.month.value;
        const year = Expense.year.value;
        const type = Expense.type.value;
        const description = Expense.description.value;
        const cost = Expense.cost.value;
        const display = Expense.display;

        const pseudoExpense = {
            day,
            month,
            year,
            type,
            description,
            cost,
            display
        }

        return pseudoExpense;
    }
}