const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price }) => {
    return `
    <div class="item__block">
        <div class="item__name">
            ${title}
        </div>
        <div>
            <p class="item__text">Price: <span class="item__text_selectcolor">${price}$</span></p>
        </div>
    </div>
    `;
};

const renderGoodsList = (list = goods) => {
    list.map((item) => {
        $goodsList.insertAdjacentHTML('beforeend', renderGoodsItem(item))
    })
}

/*const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('\n');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}*/

renderGoodsList();