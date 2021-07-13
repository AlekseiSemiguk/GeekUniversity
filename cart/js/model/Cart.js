import GoodList from "./GoodList.js";

export default class Cart extends GoodList {
    constructor(goodsData) {
        super(goodsData);
    }

    getPrice() {
        return this.goods.reduce((acc, good) => acc + good.price, 0);
    }

    add(newGood) {
        const oldGood = this.goods.find(good => good.id === newGood.id)
        if (oldGood) {
            oldGood.add()
        } else {
            this.goods.push(newGood);
        }

    }

    remove(removed_good) {
        const current_good = this.goods.find(good => good.id === removed_good.id)
        if (current_good.quantity > 1) {
            current_good.remove()
        } else {
            const index = this.goods.findIndex(good => good.id === removed_good.id);
            this.goods.splice(index, 1);
        }
    }

    getGoodList() {
        return this.goods;
    }
}