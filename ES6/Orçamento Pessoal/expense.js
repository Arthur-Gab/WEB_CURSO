export class Expense {
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