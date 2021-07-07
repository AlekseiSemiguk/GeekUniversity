export default class GoodInCart {
    constructor(good, quantity) {
        this.good = good;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.good.getPrice() * this.quantity;
    }
}