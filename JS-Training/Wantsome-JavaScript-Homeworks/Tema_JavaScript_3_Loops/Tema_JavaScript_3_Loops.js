/* 1. Scrieti un for care itereaza de la 0 la 20. 
Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for */

//Rezolvare using for:
var text = "";
for (var i = 0; i <= 20; i++) {
    // verificam daca valoarea numerica pentru i din cadrul iteratiei curente este para
    if (i % 2 == 0) { // i este par, deci afisam "i este numar par"
        text += i + " este numar par" + "\n";
        continue;
    }
    // daca executia ajunge aici, inseamna ca i este impar
    text += i + " este numar impar" + "\n";
}

//Rezolvare using while:
var a = -1; // var text a fost declarat mai sus
while (a < 20) {
    a++;
    if (a % 2 == 0) { // i este par, deci afisam "i este numar par"
        text += a + " este numar par" + "\n";
        continue;
    }
        // daca executia ajunge aici, inseamna ca i este impar
    text += a + " este numar impar" + "\n";
}

//console.log(text)

/* 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul 
curent cu 9 si se va afisa rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for */

//Rezolvare using for:
result = "";
iteration = "";
for (var b = 0; b <= 10; b++) {
    result = b * 9;
    iteration += b + "*9=" + result + "\n";
}

//Rezolvare using while:
var c = 0;
while (c <= 10) {
    result = c * 9;
    iteration += c + "*9=" + result + "\n";
    c++;
}
//console.log(iteration);

/* 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii. 
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 ) */

rezultat = "";
linie = "";
for (m = 0; m <= 10; m++) {
    for (n = 0; n <= 10; n++) {
        rezultat = m * n;
        linie += m + " * " + n + " = " + rezultat + "\n";
    }
}
// console.log(linie);

/* Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare
calificativ care se poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii 
calificativul E. \n Pentru 7, obtii calificativul B \n ...samd “). Atentie: Rezultatul calificativul 
trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara ! */

var calificativul = "";
var textul = "";
for (punctajul = 1; punctajul <= 10; punctajul++) {
    if (punctajul <= 3) {
        calificativul = "E";
    } else if (punctajul > 3 && punctajul <= 6) {
        calificativul = "D";
    } else if (punctajul > 6 && punctajul <= 8) {
        calificativul = "B";
    } else if (punctajul === 9) {
        calificativul = "A";
    } else if (punctajul === 10) {
        calificativul = "A+";
    }
    textul += "Pentru punctajul " + punctajul + ", obtii calificativul " + calificativul + "\n";
}
console.log("Rezolvare exercitiu:");
console.log(textul);

/* Exercitiu 2 din tema anterioara: Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si 
decide calificativul punctajului. Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".*/

// Rezolvarea exercitiului de la tema 2 JS:
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

console.log("Exercitiul 2 din tema 2:");
console.log(calificativCorespunzatorPunctajului(2));
console.log(calificativCorespunzatorPunctajului(4));
console.log(calificativCorespunzatorPunctajului(7));
console.log(calificativCorespunzatorPunctajului(9));
console.log(calificativCorespunzatorPunctajului(10));
console.log(calificativCorespunzatorPunctajului(20));