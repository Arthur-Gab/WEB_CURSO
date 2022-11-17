export class Storage {
    constructor(Expense) {
        // For recording this.Expense is an objLiteral
        // For recording this.Expense is a class Expense
        this.Expense = Expense;
        this.listOfExpenses = document.querySelector("#list-expenses");
    }

    recordExpense() {
        // Record Expenses in Local Storage as a Obj Literal;
        localStorage.setItem(this.getIndex(), JSON.stringify(this.toObjLiteral()));
    }

    filterExpense() {
        // Filter the expenses or expense compatible with the expenses in localStorage and display that

        // Creating an array of literal obj  filled with all expenses in localStorage compatible with filtes
        let expenses = Array();

        for (let i = 0; i < localStorage.length; i++) {

            if (localStorage.getItem(localStorage.key(i)) === JSON.stringify(this.toObjLiteral())) {

                let expense = JSON.parse(localStorage.getItem(localStorage.key(i)));
                expenses.push(expense);
            } else {

                console.log(false);
            }

        }
        // // <tr>
        // //     <td id="table-date">12/03/2020</td>
        // //     <td id="table-type">Education</td>
        // //     <td id="table-description">Mensalidade Facu</td>
        // //     <td id="table-cost">1200</td>
        // //     <td id="td-closer">
        // //         <button id="tr-closer" class="btn closer">
        // //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        // //                 <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        // //                 <path
        // //                     d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        // //             </svg>
        // //         </button>
        // //     </td>
        // // </tr>

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

    toObjLiteral() {
        // Return the values of the Expense for recording in the localStorage
        const day = this.Expense.day.value;
        const month = this.Expense.month.value;
        const year = this.Expense.year.value;
        const type = this.Expense.type.value;
        const description = this.Expense.description.value;
        const cost = this.Expense.cost.value;

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