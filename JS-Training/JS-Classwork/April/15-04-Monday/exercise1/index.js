// 1. Adaugati un tag script la final
// 2. Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
const body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Arial, sans-serif";
// 3. Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
const name = document.getElementById("name");
const favDrink = document.getElementById("fav-drink");
const bornPlace = document.getElementById("born-place");
name.textContent = "Victor";
favDrink.textContent = "Captain Morgan";
bornPlace.textContent = "Pascani";
// 4. Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula 
// pentru .listitem sa aiba culoarea rosie
const list = document.getElementsByTagName("ul");
for (let i = 0; i < list.length; i++) {
    list[i].className = "listitem";
}
// 5. Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. 
// Puneti acest element(append) la pagina noastra
const  image = document.createElement("img");
image.setAttribute("src","https://media.licdn.com/dms/image/C4E03AQFv7YUswB0F6A/profile-displayphoto-shrink_200_200/0?e=1556755200&v=beta&t=62xlg4YcEuV4GhnzjiIZhtMYqsgueSCG8DkdM1U4_10");
document.body.appendChild(image);  