//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play
//(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam 
//sub video * * *

import {world} from "./fetch.js"

const verifyLocalStorage = () => {
    if (localStorage.getItem("allData") === null) {
        world.then(data => {
            localStorage.setItem("allData",JSON.stringify(data)); 
        });
    }
    const allData = localStorage.getItem("allData");
    const parsedJson = JSON.parse(allData);
    console.log(parsedJson) 
}
verifyLocalStorage();




const videos = document.querySelector(".videos");
const title = document.createElement("h2");
