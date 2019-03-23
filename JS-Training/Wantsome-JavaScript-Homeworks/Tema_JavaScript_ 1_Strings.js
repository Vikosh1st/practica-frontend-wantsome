var hello = "Tema JavaScript 1 - Strings";
console.log(hello);

// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(input) {
    return typeof input === "string" || input instanceof String;
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// 2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(str) {
    return str === "";
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // False

// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function string_to_array(string) {
    typeof string === "string" || input instanceof String;
    var array = string.split(" ");
    return array;
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(str) {
    var splitName = str.split(" ");
    return splitName[0] + " " + splitName[1].charAt(0) + ".";
}
console.log(abbrev_name("Robin Singh")); //"Robin S."

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
function capitalize(str) {
    var firstLetter = str.charAt(0);
    return firstLetter.toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises')); //"Js string exercises"

// 6. Scrieti o functie care verifica daca un string este gol sau nu.
    // Este acelasi enunt de la punctul 2 din tema, dar se aplica din nou functia is_Blank
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

// 7. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
    // Este acelasi enunt de la punctul 3 din tema, dar se aplica din nou functia string_to_array
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(str1, str2, position) {
    return str1.substr(0, position) + str2 + str1.substr(position);
}
console.log(insert('We are doing some exercises.','JavaScript ',18));

/* "We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises." */

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(str1,str2) {
    return str1.replace(str2,"");
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the ')); //"The quick brown fox jumps over lazy dog"

// 10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(str1,str2) {
    return str1 != str2;
}
console.log(compare_strings('abcd', 'AbcD')); // true

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(str) {
    var firstLetter = str.charAt(0);
    return firstLetter.toLowerCase() + str.slice(1);
}
console.log(Uncapitalize('Js string exercises')); //"js string exercises"