import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor({ title, description, image, price }) {
        this.id = idGenerator();
        this.title = title;
        this.description = description;
        this.image = image;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}