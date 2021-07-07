export default class Hamburger {
    constructor(bun, topping, stuffing) {
        this.products = bun.concat(topping, stuffing);
    }

    getTotalSum() {
        return this.products.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.getPrice();
        }, 0)
    }

    getTotalCalories() {
        return this.products.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.getCalories();
        }, 0)
    }
}