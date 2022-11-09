class UserCreatOrFinderExpense {
    constructor(register, finder) {
        this.register = document.querySelector(register);
        this.finder = document.querySelector(finder);
        this.expense = null;
    }

    addEventClicker() {
        // Put click events here
        if ((location.pathname == "/index.html")) {
            this.register.addEventListener("click",
                this.registerExpense);
        }
        if ((location.pathname == "/confer.html")) {
            this.finder.addEventListener("click",
                this.finderExpense);
        }
    }

    registerExpense() {
        // Register Expenses
        // It is not allowed to create expense with empty values
        this.expense = new Expense(
            "#day",
            "#month",
            "#year",
            "#type",
            "#description",
            "#cost"
        );

        if (this.expense.validate()) {
            console.log("Validado")
            localStorage.setItem("Despesa", JSON.stringify(this.expense));
        } else {
            console.log("Informe valores Válidos")
        }

        
    }

    finderExpense() {
        console.log("Finder Working");
    }

    init() {
        this.addEventClicker();
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
        if (this.day == "" || isNaN(this.day))
            return false
        if (this.month == "")
            return false
        if (this.year == "")
            return false
        if (this.type == "")
            return false
        if (this.description == "")
            return false
        if (this.cost == "" || isNaN(this.cost))
            return false

        return true
    }

    show() {
        console.log(this.day, this.month, this.year, this.type, this.description, this.cost);
    }
}

const user = new UserCreatOrFinderExpense(
    "#confirm-cost",
    "#finder-cost"
);

user.init();

