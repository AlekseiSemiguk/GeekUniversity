import idGenerator from "../utils/idGenerator.js";

export default class Product {
    constructor({ title, price, calories }) {
        this.id = idGenerator();
        this.title = title;
        this._price = price;
        this._calories = calories;
    }

    getPrice() {
        return this._price;
    }

    getCalories() {
        return this._calories;
    }
}