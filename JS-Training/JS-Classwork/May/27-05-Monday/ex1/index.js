//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

document.cookie = "Name = Victor";
document.cookie = "Profession = Front End developer";
document.cookie = "Age = 32";

const name = document.cookie.split(";")[0];
const proffession = document.cookie.split(";")[1];
const age = document.cookie.split(";")[2];

document.cookie = "username = vikosh; expires=Thu, 30 May 2019 12:00:00 UTC";
document.cookie = "password = mu13PSD; expires=Thu, 30 May 2019 12:00:00 UTC";

const username = document.cookie.split(";")[5];
const password = document.cookie.split(";")[6];


