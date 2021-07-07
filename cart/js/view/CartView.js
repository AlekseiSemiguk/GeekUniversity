export default class CartView {
    constructor(cart) {
        this.cart = cart;
    }

    getHtmlGoodsInCart(good_in_cart) {
    }

    getHTMLTotalSum() {
    }

    renderGoodsInCart($container, target = 'beforeend') {
        this.cart.goods_in_cart.forEach(good => {
            $container.insertAdjacentHTML(target, this.getHtmlGoodsInCart(good));
        });
    }

    renderTotalSum($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHTMLTotalSum());
    }

}