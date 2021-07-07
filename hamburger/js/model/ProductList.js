import Product from "./Product.js";

export default class ProductList {
    constructor(products) {
        this.products = products.map(product => new Product(product));
    }

    getProductsByIds(id) {
        let arrProducts = [];
        id.forEach(element => {
            let product = this.products.filter(product => product.id == element);
            arrProducts = arrProducts.concat(product);

        });
        return arrProducts;
    }
}
