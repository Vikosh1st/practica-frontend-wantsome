text = new String();
for (i = 0; i < 39; i++) {
    text += "Contorul este: " + i + "\n";
}

// console.log(text);

var userDetails = { name:"Ovidiu", surname:"Grig", varsta: 18 };
var userInfoText = "Detaliile utilizatorului sunt: ";
for (var key in userDetails) {
 userInfoText += userDetails[key] + ", " ;
}

// console.log(userInfoText);

var textWhile = "";
var i = 0;
while(i < 39) {
    textWhile += "Contorul este: " + i + "\n";
    i++;
}

// console.log(textWhile);

var textDoWhile = "";
var i = 0;
do {
    textDoWhile += "Contorul este: " + i + "\n";
    i++;
}
while (i < 39);

// console.log(textDoWhile);

var i = 99;
while (true)
{
 // console.log(i + " oameni mai sunt in asteptare");
 i -= 1;
 if (i == 0)
 {
 break;
 }
}

for (var i = 0; i < 100; i++)
{
 // verificam daca valoarea numerica pentru i din cadrul iteratiei curente este para
 if (i % 2 == 0)
 {
 continue;
 }
 // daca executia ajunge aici, inseamna ca i este impar
 // console.log(i + " este numar impar.");
}


/* Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
numarul [index]” - Scrieti codul in doua variante
2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia - Scrieti codul in doua variante
3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia - scrieti codul in doua variante */

// Exercitiul 1:
var textul = new String();
function iterationUsingFor(number) {
    for (var i = 1; i > 0; i++) {
        textul += "Sunt la iternatia cu numarul " + i + "\n";
        if (i >= number) {
            break;
        }
    }
    return textul;
}
//console.log(iterationUsingFor(20));

function iterationUsingWhile(number) {
    var i = 1;
    while (true) {
        textul += "Sunt la iternatia cu numarul " + i + "\n";
        i++;
        if (i > number) {
            break;
        }
    }
    return textul;
}
// console.log(iterationUsingWhile(20));

// Exercitiul 2:
var myArray = new Array();
var arrayElements = "";
function showArrayElementsUsingFor(myArray) {
    for (var i = 0; i < myArray.length; i++) {
        arrayElements += myArray[i].toString() + "\n";
    }
    return arrayElements;
}
// console.log(showArrayElementsUsingFor(["John",1,"Jake",2,"Victor",3]));

function showArrayElementsUsingWhile(myArray) {
    var i = 0;
    while (i < myArray.length) {
        arrayElements += myArray[i].toString() + "\n";
        i++;
    }
    return arrayElements;
}
// console.log(showArrayElementsUsingWhile(["John",1,"Jake",2,"Victor",3]));


// Exercitiul 3:
var myObject = new Object();
var objectElement = new String();
function showObjectElementsUsingFor(myObject) {
    for (var key in myObject) {
        objectElement += myObject[key] + "\n" ;
    }
    return objectElement;
}

// console.log(showObjectElementsUsingFor({name: "John", surname: "Doe", age: 30, sex: "masculin"}));

/* Cerinta:
1. 0 100 200 300 400 500 600 700 800 900 1000
2. 1 2 4 8 16 32 64 128
3. 0 2 4 6 8 10
4. 3 6 9 12 15
5. 9 8 7 6 5 4 3 2 1 0
6. 1 1 1 2 2 2 3 3 3 4 4 4
7. 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

// 1:
var i = 0;
var result1 = "";
while (i <= 1000) {
    result1 += i + " ";
    i += 100;
}
//console.log(result1);

// 2:
var result2 = "";
for (i = 1; i < 150; i *= 2) {
    result2 += i + " ";
}
//console.log(result2);

// 3:
var result3 = "";
var a = 0;
while (a < 11) {
    result3 += a + " ";
    a += 2;
}
//console.log(result3);

// 4:
var result4 = "";
var b = 0;
while (b < 16) {
    result4 += b + " ";
    b += 3;
}
//console.log(result4);

// 5:
var result5 = "";
for (var c = 9; c >= 0; c--) {
    result5 += c + " ";
}
//console.log(result5);

// 6:
var result6 = "";
for (d = 1; d < 5; d++) {
    result6 += d + " " + d + " " + d + " ";
}
//console.log(result6);

// 7:
var result7 = "";
var result8 = "";
for (e = 0; e < 5; e++) {
    result7 += e + " ";
    result8 = result7 + result7 + result7;
}
//console.log(result8);

/* Completati functia stream. Trebuie sa:
● accepte ca argumente 2 functii: conditionalFn, actionFn.
● apeleaza actionFn pana cand conditionalFn returneaza fals
● nu returneaza nimic
 */

//Exemplu 1:
conditionalFn = function() { return false; };
actionFn = function() { console.log("Vreau sa ies la tabla!"); };
stream(conditionalFn, actionFn); // Nu afiseaza nimic
// Exemplu 2:
counter = 10;
conditionalFn = function() {
 counter--;
 return counter >= 0;
};
stream(conditionalFn, actionFn); // Afiseaza “Vreau sa ies la tabla” de 10 ori

function stream(fn1,fn2) {
    while (fn1 == true) {
        fn2();
        if (fn1 == false) {
            break;
        }
    } 
}

/* Completati functia computeSumOfArrayElements. Trebuie sa:
● accepte ca argument un array format din numere
● returneze suma numerelor din array
● foloseasca instructiunea while */

//Exemplu 1:
computeSumOfArrayElements([]); // returneaza 0
//Exemplu 2:
computeSumOfArrayElements([1,2,3,4]); // returneaza 10

function computeSumOfArrayElements(array) {
    if (toString.call(array) !== "[object Array]") { // to make sure our input is an array
        return "Input is not an array";
    }
    var sum = 0;
    var i = 0;
    while (i < array.length) {
        sum += Number(array[i]);
        i++;
    } return sum;
}
console.log(computeSumOfArrayElements([]));
console.log(computeSumOfArrayElements([1,2,3,4]));
console.log(computeSumOfArrayElements("Hello"));