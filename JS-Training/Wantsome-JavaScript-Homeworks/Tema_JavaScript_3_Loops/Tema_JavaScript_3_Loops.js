/* 1. Scrieti un for care itereaza de la 0 la 20. 
Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for */

console.log("Exercise 1:");
//Rezolvare using for:
console.log("Answer 1 using FOR loop:");
const isEvenUsingFor = () => {
    let text = "";
    for (let i = 0; i <= 20; i++) {
        // verificam daca valoarea numerica pentru i din cadrul iteratiei curente este para
        if (i % 2 == 0) { // i este par, deci afisam "i este numar par"
            text += i + " este numar par" + "\n";
            continue;
        }
        // daca executia ajunge aici, inseamna ca i este impar
        text += i + " este numar impar" + "\n";
    }
    return text;
}
console.log(isEvenUsingFor());

//Rezolvare using while:
console.log("Answer 2 using WHILE loop:");
const isEvenUsingWhile = () => {
    let text = "";
    let a = -1; // var text a fost declarat mai sus
    while (a < 20) {
        a++;
        if (a % 2 == 0) { // i este par, deci afisam "i este numar par"
            text += a + " este numar par" + "\n";
            continue;
        }
        // daca executia ajunge aici, inseamna ca i este impar
        text += a + " este numar impar" + "\n";
    }
    return text;
}
console.log(isEvenUsingWhile());



/* 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul 
curent cu 9 si se va afisa rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for */
console.log("Exercise 2:");
//Rezolvare using for:
console.log("Answer 1 using FOR loop:");
const multiplyBy9UsingFor = () => {
    let result = "";
    let iteration = "";
    for (let i = 0; i <= 10; i++) {
        result = i * 9;
        iteration += i + "*9=" + result + "\n";
    }
    return iteration;
}
console.log(multiplyBy9UsingFor());
//Rezolvare using while:
console.log("Answer 2 using WHILE loop:");
const multiplyBy9UsingWhile = () => {
    let iteration = "";
    let i = 0;
    while (i <= 10) {
        result = i * 9;
        iteration += i + "*9=" + result + "\n";
        i++;
    }
    return iteration;
}
console.log(multiplyBy9UsingWhile());

/* 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii. 
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 ) */
console.log("Exercise 3:");
const multiplicationTable = () => {
    var result = "";
    var line = "";
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            result = i * j;
            line += i + " * " + j + " = " + result + "\n";
        }
    }
    return line;
}
console.log(multiplicationTable());

/* 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare
calificativ care se poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii 
calificativul E. \n Pentru 7, obtii calificativul B \n ...samd “). Atentie: Rezultatul calificativul 
trebuie sa fie obtinut prin utilizarea functiei dezvoltate la tema anterioara ! */


// Am modificat functia de la tema anterioara pentru a obtine doar calificativul, in loc de to textul:
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
        } return mark;
    } return "Punctajul trebuie sa fie cuprins intre valoarea 1 si 10 pentru a putea calcula calificativul";
}

const listAllMarksMatchingTheSpecificGrade = () => {
    let text = "";
    for (let i = 1; i <= 10; i++) {
        mark = markMatchingTheSpecificGrade(i);
        text += "Pentru punctajul " + i + ", obtii calificativul " + mark + "\n";
    }
    return text;
}
console.log("Exercise 4:");
console.log(listAllMarksMatchingTheSpecificGrade());