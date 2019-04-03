// Tema JavaScript 2 - Function Types & Conditionals

// Obs: Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor. 
// Modalitatea in care se va decide punctajul va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.

// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function verifySexFromCnp(CNP) {
    var sexul = CNP.toString().charAt(0);

    if ( sexul === "1" || sexul === "3" || sexul === "5" || sexul === "7" ) {
        return "Persoana verificata este de sexul Masculin";
    } else if ( sexul === "2" || sexul === "4" || sexul === "6" || sexul === "8") {
        return "Persoana verificata este de sexul Feminin";
    } else return "CNP-ul nu este valid";
}

console.log("Exercitiul 1:");
console.log(verifySexFromCnp(1870330));
console.log(verifySexFromCnp(2870330));
console.log(verifySexFromCnp(3870330));
console.log(verifySexFromCnp(4870330));
console.log(verifySexFromCnp(9870330));

/* 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si 
decide calificativul punctajului. Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".*/

var calificativCorespunzatorPunctajului = function(punctaj) {
    if ( punctaj >= 1 && punctaj <= 10 ) { // Pentru ca punctajul sa fie cuprins intre 1 si 10
        switch (true) { // Pentru a returna calificativul atribuit fiecarui punctaj
            case punctaj >= 1 && punctaj <= 3:
            calificativ = "E";
            break;
            case punctaj > 3 && punctaj <= 6: 
            calificativ = "D";
            break;
            case punctaj > 6 && punctaj <= 8:
            calificativ = "B";
            break;
            case punctaj === 9:
            calificativ = "A";
            break;
            case punctaj === 10:
            calificativ = "A+";
        } return "Calificatul corespunzator punctajului " + punctaj + " este " + calificativ;
    } return "Punctajul trebuie sa fie cuprins intre valoarea 1 si 10 pentru a putea calcula calificativul";
}

console.log("Exercitiul 2:");
console.log(calificativCorespunzatorPunctajului(2));
console.log(calificativCorespunzatorPunctajului(4));
console.log(calificativCorespunzatorPunctajului(7));
console.log(calificativCorespunzatorPunctajului(9));
console.log(calificativCorespunzatorPunctajului(10));
console.log(calificativCorespunzatorPunctajului(20));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: 
// "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. 
// In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. "
// Scrieti codul in 3 variante diferite.

// Varianta 1
function returneazaTaraFolosindDoarIfElse(marca) {
    if (marca === "Dacia"){
        return "Marca " + marca + " se produce in Romania."; 
    } 
    if (marca === "Seat") {
        return "Marca " + marca + " se produce in Spania.";
    }    
    if (marca === "Fiat") {
        return "Marca " + marca + " se produce in Italia.";
    } 
    if (marca === "BMW") {
        return "Marca " + marca + " se produce in Germania.";
    } 
    if (marca === "Audi") {
        return "Marca " + marca + " se produce in Germania.";
    } 
    if (marca === "Mercedes") {
        return "Marca " + marca + " se produce in Germania.";
    }   
    else {
        return "Marca este necunoscuta.";
    }
}

console.log("Exercitiul 3:");
console.log("Varianta 1:");
console.log(returneazaTaraFolosindDoarIfElse("Seat"));
console.log(returneazaTaraFolosindDoarIfElse("BMW"));
console.log(returneazaTaraFolosindDoarIfElse("Ford"));

//Varianta 2

var tara = function atribuieTaraFiecareiMarci(marca) {
    if (marca === "Dacia") {
        return "Romania";
    } else if (marca === "Seat") {
        return "Spania";
    } else if (marca === "Fiat") {
        return "Italia";
    } else if (marca === "BMW") {
        return "Germania";
    } else if (marca === "Audi") {
        return "Germania";
    } else if (marca === "Mercedes") {
        return "Germania";
    }
};

function returneazaTaraFolosindElseIf(marca) {
    if (tara(marca) === undefined) {
        return "Marca este necunoscuta."
    }
    return "Marca " + marca + " se produce in " + tara(marca) + ".";
}

console.log("Varianta 2:");
console.log(returneazaTaraFolosindElseIf("Fiat"));
console.log(returneazaTaraFolosindElseIf("Audi"));
console.log(returneazaTaraFolosindElseIf("Ford"));

// Varianta 3
function returneazaTaraFolosindSwitch(marca){
    switch(marca) {
        case "Dacia":
        return  "Marca " + marca + " se produce in Romania.";
        break;
        case "Seat":
        return  "Marca " + marca + " se produce in Spania.";
        break;
        case "Fiat":
        return  "Marca " + marca + " se produce in Italia.";
        break;
        case "BMW":
        case "Audi":
        case "Mercedes":
        return  "Marca " + marca + " se produce in Germania.";
        break;
        default:
        return "Marca este necunoscuta.";
    }
}

console.log("Varianta 3:");
console.log(returneazaTaraFolosindSwitch("Dacia"));
console.log(returneazaTaraFolosindSwitch("Mercedes"));
console.log(returneazaTaraFolosindSwitch("Ford"));

// 4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.
// Rezolvarea exercitiului 4 se afla pe index.html, respectiv index.js, din acelasi folder.