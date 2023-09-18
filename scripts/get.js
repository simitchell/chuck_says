'use strict';

// function get(url) {
//     return fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             return data;
//         })
//         .catch(function (error) {
//             console.log("Error: ", error);
//         })
// };

async function getWithAwait(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error In Try/Catch: ', error);
    }
 
}