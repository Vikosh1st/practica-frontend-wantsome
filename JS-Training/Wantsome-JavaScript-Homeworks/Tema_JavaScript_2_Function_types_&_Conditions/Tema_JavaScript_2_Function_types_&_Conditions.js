// Tema JavaScript 2 - Function Types & Conditionals

// Obs: Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor. 
// Modalitatea in care se va decide punctajul va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.

// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function verifySexFromCnp (CNP) {
    const sexul = CNP.toString().charAt(0);
    if ( sexul === "1" || sexul === "3" || sexul === "5" || sexul === "7" ) {
        return "Persoana verificata este de sexul Masculin";
    } else if ( sexul === "2" || sexul === "4" || sexul === "6" || sexul === "8") {
        return "Persoana verificata este de sexul Feminin";
    } else return "CNP-ul nu este valid";
}

console.log("Exercise 1:");
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

const markMatchingTheSpecificGrade = (grade) => {
    if ( grade >= 1 && grade <= 10 ) { // Pentru ca punctajul sa fie cuprins intre 1 si 10
        switch (true) { // Pentru a returna calificativul atribuit fiecarui punctaj
            case grade >= 1 && grade <= 3:
            mark = "E";
            break;
            case grade > 3 && grade <= 6: 
            mark = "D";
            break;
            case grade > 6 && grade <= 8:
            mark = "B";
            break;
            case grade === 9:
            mark = "A";
            break;
            case grade === 10:
            mark = "A+";
        } return "Calificatul corespunzator punctajului " + grade + " este " + mark;
    } return "Punctajul trebuie sa fie cuprins intre valoarea 1 si 10 pentru a putea calcula calificativul";
}

console.log("Exercise 2:");
console.log(markMatchingTheSpecificGrade(2));
console.log(markMatchingTheSpecificGrade(4));
console.log(markMatchingTheSpecificGrade(7));
console.log(markMatchingTheSpecificGrade(9));
console.log(markMatchingTheSpecificGrade(10));
console.log(markMatchingTheSpecificGrade(20));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: 
// "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. 
// In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. "
// Scrieti codul in 3 variante diferite.

// Varianta 1
const returnCountryUsingIfElse = (brand) => {
    if (brand === "Dacia"){
        return "Marca " + brand + " se produce in Romania."; 
    } 
    if (brand === "Seat") {
        return "Marca " + brand + " se produce in Spania.";
    }    
    if (brand === "Fiat") {
        return "Marca " + brand + " se produce in Italia.";
    } 
    if (brand === "BMW") {
        return "Marca " + brand + " se produce in Germania.";
    } 
    if (brand === "Audi") {
        return "Marca " + brand + " se produce in Germania.";
    } 
    if (brand === "Mercedes") {
        return "Marca " + brand + " se produce in Germania.";
    }   
    else {
        return "Marca este necunoscuta.";
    }
}

console.log("Exercise 3:");
console.log("Answer 1:");
console.log(returnCountryUsingIfElse("Seat"));
console.log(returnCountryUsingIfElse("BMW"));
console.log(returnCountryUsingIfElse("Ford"));

//Varianta 2:
const country = (brand) => {
    if (brand === "Dacia") {
        return "Romania";
    } else if (brand === "Seat") {
        return "Spania";
    } else if (brand === "Fiat") {
        return "Italia";
    } else if (brand === "BMW") {
        return "Germania";
    } else if (brand === "Audi") {
        return "Germania";
    } else if (brand === "Mercedes") {
        return "Germania";
    }
};

const returnCountryUsingElseIf = (brand) => {
    if (country(brand) === undefined) {
        return "Marca este necunoscuta.";
    }
    return "Marca " + brand + " se produce in " + country(brand) + ".";
}

console.log("Answer 2:");
console.log(returnCountryUsingElseIf("Fiat"));
console.log(returnCountryUsingElseIf("Audi"));
console.log(returnCountryUsingElseIf("Ford"));

// Varianta 3
const returnCountryUsingSwitch = (brand) => {
    switch(brand) {
        case "Dacia":
        return  "Marca " + brand + " se produce in Romania.";
        break;
        case "Seat":
        return  "Marca " + brand + " se produce in Spania.";
        break;
        case "Fiat":
        return  "Marca " + brand + " se produce in Italia.";
        break;
        case "BMW":
        case "Audi":
        case "Mercedes":
        return  "Marca " + brand + " se produce in Germania.";
        break;
        default:
        return "Marca este necunoscuta.";
    }
}

console.log("Answer 3:");
console.log(returnCountryUsingSwitch("Dacia"));
console.log(returnCountryUsingSwitch("Mercedes"));
console.log(returnCountryUsingSwitch("Ford"));

// 4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.
// Rezolvarea exercitiului 4 se afla pe index.html, respectiv index.js, din acelasi folder.