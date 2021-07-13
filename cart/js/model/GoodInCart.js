import Good from "./Good.js";

export default class GoodInCart extends Good {
    constructor({ title, description, image, _price, id }, quantity = 1) {
        super({ title, description, image, price: _price });
        this.id = id;

        this.quantity = quantity;
    }

    get price() {
        return this._price * this.quantity;
    }

    add() {
        this.quantity++;
    }

    remove() {
        this.quantity--;
    }
}