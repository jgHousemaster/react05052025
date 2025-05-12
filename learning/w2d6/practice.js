const BASE_PRICE = {
    small: 6.5,
    medium: 7.5,
    large: 8.5,
};

const TOPPINGS = {
    p: { cost: 1.5, name: "pepperoni" },
    g: { cost: 0.86, name: "green pepper" },
    o: { cost: 0.5, name: "onion" },
    bo: { cost: 0.2, name: "black olive" },
    m: { cost: 0.82, name: "mushroom" },
    c: { cost: 0.77, name: "cheese" },
};

class Pizza {
    constructor(size, toppingCodes) {
        this.size = size;
        this.toppingCodes = toppingCodes;
    }

    getBaseCost() {
        return BASE_PRICE[this.size];
    }

    getTotalCost() {
        return this.getBaseCost() + this.toppingCodes.reduce((sum, code) => {
            sum += TOPPINGS[code].cost;
        }, 0)
    }

    getDescription() {
        return `A ${this.size} pizza with ` + this.toppingCodes.map((code) => {
            return TOPPINGS[code].name
        }).join(", ") + ".";
    }
}

const my_pizza = new Pizza("small", ["p", "g"]);
console.log(my_pizza.toppingCodes.map((code) => {
    code;
}))
console.log(my_pizza.getDescription())