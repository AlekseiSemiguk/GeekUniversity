import API from "./API.js";
import Hamburger from "./model/Hamburger.js";
import ProductList from "./model/ProductList.js";

const BunList = new ProductList(API.fetchBun());
const ToppingList = new ProductList(API.fetchTopping());
const StuffingList = new ProductList(API.fetchStuffing());

const BunForBurger = BunList.getProductsByIds([1]);
const ToppingforBurger = ToppingList.getProductsByIds([3]);
const StuffingforBurger = StuffingList.getProductsByIds([5, 6, 7])

const Burger = new Hamburger(BunForBurger, ToppingforBurger, StuffingforBurger)

console.log(Burger.getTotalSum());
console.log(Burger.getTotalCalories());