export class Storage {
    constructor(Expense) {
        // For recording this.Expense is an objLiteral
        // For recording this.Expense is a class Expense
        this.Expense = Expense;
        this.expensesTable = document.querySelector("#list-expenses");
        this.expenses = null;
    }

    recordExpense() {
        // Record Expenses in Local Storage as an Obj Literal;
        localStorage.setItem(this.getIndex(), JSON.stringify(this.toObjLiteral(this.Expense)));
    }

    filterExpense() {
        // This method has the purpose of returning the keys of the expenses filtered in localStorage to serve as a "tracker" 
        // for modifying the display attribute by replacing the obj itself with a new identical one

        // 1° Step: Get the values wich the user want, can be how many values he want (SAVE THE INPUTS FILLED AS AN ARRAY)
        const INPUTFILLEDS = this.getinputFilleds();

        // 2° Step: filter the expenses and get his keys in localStorage for later update the atribute display 
        const KEYS = [];

        // Searching for an expense compatible with filter 
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
                KEYS.push(key);
            }
        }

        return KEYS;
    }

    displayExpense(KEYS) {
        // This method is intended to display filtered expenses without repeating the same expense.

        console.log(this.expenses);
        console.log(KEYS);

        KEYS.forEach(key => {

            // 1° Step: Display the filtered expenses in the table checking if it is already displayed
            console.log(key);
            
            let expense = JSON.parse(localStorage.getItem(localStorage.key(key)));
            
            console.log(expense);

            if(expense) {
                if (expense.display === "inactive") {
                    // Creating <tr>
                    let row = this.expensesTable.insertRow();
    
                    // Creating <td>
                    row.insertCell(0).innerHTML = `${expense.day}/${expense.month}/${expense.year}`;
                    row.insertCell(1).innerHTML = `${expense.type}`;
                    row.insertCell(2).innerHTML = `${expense.description}`;
                    row.insertCell(3).innerHTML = `R$ ${expense.cost}`;
                }
            }

            // 2° Step: Modify the display attribute so that 2 displays of an expense already on display do not occur
            

        });


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