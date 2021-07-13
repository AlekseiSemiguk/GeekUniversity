function makeGETRequest(url) {

    return new Promise(function (resolve, reject) {

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(this.response);
                } else if (xhr.status >= 400) {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            }
        }

        xhr.send();

    });
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function render(goods) {
    console.log(goods);
}
function fetchGoods() {
    makeGETRequest(`${API_URL}/catalogData.json`)
        .then(
            data => {
                return JSON.parse(data);
            },
            error => alert(`Ошибка: ${error}`)
        )
        .then(goods => render(goods))
}


function fetchGoods1() {

    return new Promise(function (resolve, reject) {
        makeGETRequest(`${API_URL}/catalogData.json`)
            .then(
                data => {
                    resolve(JSON.parse(data));
                },
                error => alert(`Ошибка: ${error}`)
            );
    })
        .then(data => render(data))

}


fetchGoods();

//fetchGoods1();


