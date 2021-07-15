const text = "Lorem ipsu'm dolor si't amet 'consectetur' adipisicing elit. Ea 'mollitia vero autem natus esse' voluptatem 'porro nesciunt quam' magnam, illum, itaqu'e impedit! Quasi placeat atque, amet dolore delectus similique illum";

function changeQuotes(text) {
    let regexp = /\s'/gim;
    let replacement = " \""
    let res = text.replace(regexp, replacement);
    regexp = /'\s/gim;
    replacement = "\" "
    return res.replace(regexp, replacement);
}

const div = document.getElementById("text-block");
div.innerHTML = changeQuotes(text);

const button = document.getElementById("button");
const email = document.getElementById("email");

button.addEventListener("click", checkEmail);

function checkEmail(e) {
    e.preventDefault();
    const regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const str = email.value;
    noError = regex.test(str);
    if (noError) {
        alert("проверка пройдена успешно");
    } else {
        alert("неверный e-mail");
    }
}


