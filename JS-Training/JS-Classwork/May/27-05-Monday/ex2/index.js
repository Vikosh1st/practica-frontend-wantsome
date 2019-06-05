//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") 
// ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width","100px");
localStorage.setItem("height","100px");
localStorage.setItem("background-color","green");

const width = localStorage.getItem("width");
const height = localStorage.getItem("height");
const background = localStorage.getItem("background-color");

const mySquare = document.querySelector("#square");
mySquare.style.width = width;
mySquare.style.height = height;
mySquare.style.backgroundColor = background;