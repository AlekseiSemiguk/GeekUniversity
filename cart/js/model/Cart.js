import GoodInCart from "./GoodInCart.js";

export default class Cart {
    constructor(goods_in_cart) {
        this.goods_in_cart = goods_in_cart.map(item => new GoodInCart(item));
    }

    get() {
        return this.goods_in_cart;
    }

    add(good, quantity) {
    }

    remove(id, quantity) {
    }

    getTotalSum() {
    }
}