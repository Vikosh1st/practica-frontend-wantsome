// PRE: create separate module to import fetch function(request) in index.js
//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json

const url = "https://jsonplaceholder.typicode.com/users";

export const users = fetch(url).then(response => response.json());



// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
const url2 = 'https://www.googleapis.com/books/v1/volumes?q=horror';

export const books = fetch(url2).then(response => response.json());