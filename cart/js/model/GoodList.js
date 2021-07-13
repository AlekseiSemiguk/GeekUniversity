import Good from "./Good.js";

export default class GoodList {
    constructor(goods) {
        this.goods = goods.map(item => new Good(item));
    }

    get() {
        return this.goods;
    }

    getById(id) {
        return this.goods.find(good => good.id === id);
    }

    getQuantity() {
        return this.goods.reduce((acc, good) => acc + good.quantity, 0)
    }


    add(good) {
        this.goods.push(good);
    }

    remove(id) {
        const index = this.goods.findIndex(good => good.id === id);
        this.goods.splice(index, 1);
    }
}