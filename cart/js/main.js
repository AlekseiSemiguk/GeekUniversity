import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Cart from "./model/Cart.js";
import Card from "./view/Card.js";
import GoodInCart from "./model/GoodInCart.js";

function addToCart(id) {
    const good = goodList.getById(id);
    cart.add(new GoodInCart(good));

}

function removeFromCart(id) {
    const good = goodList.getById(id);
    cart.remove(good);

}

const goodList = new GoodList(API.fetch());
const cart = new Cart([]);

const $product = document.querySelector('.product');

const cards = goodList.get().map(good => new Card(good));

cards.forEach(card => {
    card.setAddHandler(addToCart);
    card.render($product);
});

addToCart(2);
addToCart(2);
addToCart(2);
addToCart(3);
addToCart(4);
removeFromCart(2);
removeFromCart(3);

console.log(cart.getGoodList());



