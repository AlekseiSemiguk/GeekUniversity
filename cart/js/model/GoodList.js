import Good from "./Good.js";

export default class GoodList {
    constructor(goods) {
        this.goods = goods.map(item => new Good(item));
    }

    get() {
        return this.goods;
    }

    add(good) {
        this.goods.push(good);
    }

    remove(id) {
        const index = this.goods.findIndex(good => good.id === id);
        this.goods.splice(index, 1);
    }

    getTotalSum() {
        return this.goods.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.getPrice();
        }, 0)
    }
}