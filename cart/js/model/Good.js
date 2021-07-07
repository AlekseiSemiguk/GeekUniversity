import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor({ title, description, image, price, discount }) {
        this.id = idGenerator();
        this.title = title;
        this.description = description;
        this.image = image;
        this._price = price;
        this._discount = discount;
    }

    getPrice() {
        return this._price - this._discount;
    }
}