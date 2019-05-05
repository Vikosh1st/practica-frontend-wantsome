const hello = "Tema JavaScript 1 - Strings";
console.log(hello);

// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.
const isString = (str) => {
    return typeof str === "string" || str instanceof String;
}
console.log("ex1:");
console.log(isString('wantsome')); // true
console.log(isString([1, 2, 4, 0])); // false

// 2. Scrieti o functie care verifica daca un string este gol sau nu.
const isBlank = (str) => {
    return str === "";
}
console.log("ex2:");
console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
const stringToArray = (str) => {
    let array = str.split(" ");
    return array;
}
console.log("ex3:");
console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]

// 4. Scrieti o functie care transforma un string in forma abreviata:
const abbrevStr = (str) => {
    let splitName = str.split(" ");
    return splitName[0] + " " + splitName[1].charAt(0) + ".";
}
console.log("ex4:");
console.log(abbrevStr("Robin Singh")); //"Robin S."

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
const capitalizeFirstLetter = (str) => {
    let firstLetter = str.charAt(0);
    return firstLetter.toUpperCase() + str.slice(1);
}
console.log("ex5:");
console.log(capitalizeFirstLetter('js string exercises')); //"Js string exercises"

// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
const truncateString = (str,charNumber) => {
    return str.substr(0, charNumber);
}
console.log("ex6:");
console.log(truncateString("Robin Singh",4)); // "Robi"

// 7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
const isUpperCaseAt = (str,charNumber) => {
    return str.charAt(charNumber) === str.charAt(charNumber).toUpperCase()
}
console.log("ex7:");
console.log(isUpperCaseAt('Js STRING EXERCISES', 1)); // false

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
const insertString = (str1, str2, position) => {
    return str1.substr(0, position) + str2 + str1.substr(position);
}
console.log("ex8:");
console.log(insertString('We are doing some exercises.','JavaScript ',18));

/* "We are doing some exercises." + "JavaScript" = "We are doing some JavaScript exercises." */

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
const removeFirstOccurrence = (str1,str2) => {
    return str1.replace(str2,"");
}
console.log("ex9:");
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the ')); 
//"The quick brown fox jumps over lazy dog"

// 10. Scrieti o functie care compara doua string-uri case-insensitive:
const compareStrings = (str1,str2) => {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log("ex10:");
console.log(compareStrings('abcd', 'AbcD')); // true

// 11. Scrieti o functie care face ca primul caracter al unui string sa fie de tip uncapital:
const unCapitalizeFirstLetter = (str) => {
    let firstLetter = str.charAt(0);
    return firstLetter.toLowerCase() + str.slice(1);
}
console.log("ex11:");
console.log(unCapitalizeFirstLetter('Js string exercises')); //"js string exercises"