// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.

console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// 2. Scrieti o functie care verifica daca un string este gol sau nu.

console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // False

// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Scrieti o functie care transforma un string in forma abreviata:

console.log(abbrev_name("Robin Singh")); //"Robin S."

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

console.log(capitalize('js string exercises')); //"Js string exercises"

// 6. Scrieti o functie care verifica daca un string este gol sau nu.

console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

// 7. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

console.log(insert('We are doing some exercises.','JavaScript ',18));

/* "We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises." */

// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); //"The quick brown fox jumps over lazy dog"

// 10. Scrieti o functie care compara doua string-uri case-insensitive:

console.log(compare_strings('abcd', 'AbcD')); // true

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

console.log(Uncapitalize('Js string exercises')); //"js string exercises"