'use strict';

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM IS READY");

    const chuckQuote = document.querySelector('#chuckQuote');

    fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showQuote(data.value, chuckQuote);
            return data;
        });
});

function showQuote(quote, element) {
    element.innerText = quote;
}
