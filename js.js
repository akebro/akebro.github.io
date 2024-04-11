/* Это объявление переменной, мы нашли кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
    var img = document.createElement("img");
    img.src = "kapibar.gif";
    img.style.position = "fixed";
    img.style.right = "0px";
    img.style.bottom = "0px";
    img.style.width = "200px";
    img.style.height = "200px";
    document.body.appendChild(img);

    setTimeout(function() {
        document.body.removeChild(img);
    }, 1000);
})