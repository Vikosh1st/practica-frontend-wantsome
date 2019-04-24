//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

const returnSumOfNumbers = (number) => {
    let sum = 0;  
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}
console.log(returnSumOfNumbers(5));
  
/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
  
const returnLongestWordInString = (string) => {
    const splitStr = string.split(" ");
    let longestWord = 0;
    let finalString = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
            finalString = splitStr[i];
        }    
    }
    return finalString;
}
console.log(returnLongestWordInString("Say hello to all frontenders"));

/*  
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("frontend"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
  
const replaceLetter = (str) => {
    let finalString = "";
    for (let i = 0; i < str.length; i++) {
        finalString += String.fromCharCode(str.charCodeAt(i)+1);
    }
    return finalString;
}
console.log(replaceLetter("frontend"));
  
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
  
const convertToTime = (number) => {
    let hours = number / 60;
    let minutes = number % 60;
    return Math.trunc(hours) + ":" + minutes
}
console.log(convertToTime(64));
console.log(convertToTime(205));
  
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
  
const sortStringAlphabetically = (str) => {
    return str.split("").sort().join("");
}
console.log(sortStringAlphabetically("frontend"));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false 
*/

const verifyPlusBeforeAndAfter = (str) => {
    let splitStr = str.split("");
    let result = "";
    for (let i = 0; i < splitStr.length; i += 2) {
        (splitStr[i] === "+") ? result = true : result = false;
    }
    return result;
}
console.log(verifyPlusBeforeAndAfter("+a+b+c+"));
console.log(verifyPlusBeforeAndAfter("+ab+c+d+"));
