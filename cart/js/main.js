import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Card from "./view/Card.js";

const goodList = new GoodList(API.fetch());

const $product = document.querySelector('.product');

const cards = goodList.get().map(good => new Card(good));

cards.forEach(card => {
    card.render($product);
});