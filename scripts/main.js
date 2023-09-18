'use strict';

const categoryListFormEl = document.querySelector('#categoryListForm');

document.addEventListener("DOMContentLoaded", async function () {
    console.log("DOM IS READY");

    const chuckQuote = document.querySelector('#chuckQuote');

    const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';

    const responseJoke = await getWithAwait(apiUrl);
        showQuote(responseJoke.value, chuckQuote);

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
    getWithAwait(categoriesUrl)
        .then(function (response) {
            // console.log(response);
            const valueToRemove = 'explicit';
            const filteredCategories = response.filter(item => item != valueToRemove);
            makeCategoryList(filteredCategories);
        })

    const response = await getWithAwait(categoriesUrl);
    makeCategoryList(response);

    categoryListFormEl.addEventListener('submit', function (event) {
        event.preventDefault();
        const newCategory = this.querySelector('select').value;
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${newCategory}`;
        generateQuote(apiUrl);
    });

    async function generateQuote(apiUrl) {
        get(apiUrl).then(function (response) {
            // console.log('Response: ', response);
            showQuote(response.value, chuckQuote);
        });
    }

    function showQuote(quote, element) {
        element.innerText = quote;
    }

    function makeCategoryList(categoryArray) {
        // console.log(categoryArray);
        const selectEl = document.createElement('select');
        categoryArray.map(function (category) {
            // create an option element
            const option = document.createElement('option');
            // define option attributes
            option.value = category;
            option.text = category;
            // append the option to the <select>
            selectEl.appendChild(option);
        });
        // append the <select> to the <form>
        categoryListFormEl.append(selectEl);
    }
});

// this returns an array makeCategoryList(categoryArray).  16 items.  Our mission is to write a .filter onto this array in order to take out unwanted categories, such as explicit.  Start by removing one category, then move on from there.  * Mission completed 09.15.23
