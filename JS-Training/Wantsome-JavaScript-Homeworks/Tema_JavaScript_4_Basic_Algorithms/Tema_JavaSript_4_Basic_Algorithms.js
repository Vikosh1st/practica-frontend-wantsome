//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

const emailProtection = (email) => {
    const splitEmail = email.split("@");
    const splitEmailName = splitEmail[0].split("");
    let newEmailName = "";
    let newEmail = "";
    for (let i = 0; i <= 5; i++) {
        newEmailName += splitEmailName[i];
        newEmail = newEmailName + "*****@" + splitEmail[1];
    }
    return newEmail;
}
console.log("Exercise 1:");
console.log(emailProtection("ovidiu.grigoras@test.com"))

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

const upperCaseEveryFirstLetter = (string) => {
    const splitString = string.split(" ");
    let finalString = "";
    for (let i = 0; i < splitString.length; i++) {
        let upperCaseFirstLetterForEveryWord = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1) + " ";
        finalString += upperCaseFirstLetterForEveryWord;
    }
    return finalString;
  }
  console.log("Exercise 2:");
  console.log(upperCaseEveryFirstLetter("i am superman"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

const switchLetterCapitalization = (string) => {
    const splitString = string.split("");
    let switchedString = "";
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].charCodeAt(0) < 95) {
            splitString[i] = splitString[i].toLowerCase();
        } else {
            splitString[i] = splitString[i].toUpperCase();
        }
        switchedString += splitString[i];
    }
    return switchedString;
}
console.log("Exercise 3:");
console.log(switchLetterCapitalization("xxXyYzZZ"));
console.log(switchLetterCapitalization("XXxYyZzz"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

const concatString = (str,howManyTimes) => {
    let finalString = "";
    for (let i = 1; i <= howManyTimes; i++) {
        finalString += str + " ";
    }
    return finalString;
}
console.log("Exercise 4:");
console.log(concatString("Wantsome", 4));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, 
// the word 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

const verifyPalindrome = (str) => {
    return str === str.split("").reverse().join("");
}
console.log("Exercise 5:");
console.log(verifyPalindrome("level"));
console.log(verifyPalindrome("hello"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si 
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

const returnTheLargestNumbersFromComposedArrays = (myComposedArray) => {
    let finalArray = [];
    for (let i = 0; i < myComposedArray.length; i++) {
        let maxNumberFromEachArray = myComposedArray[i].reduce((a, b) => { 
            return Math.max(a, b);
        })
        finalArray.push(maxNumberFromEachArray);
    } 
    return finalArray;
}
console.log("Exercise 6:");
console.log(returnTheLargestNumbersFromComposedArrays([[4,8,19,[23]],[13,18,24],[3,17,25]]));

//Ex7
// Implementati o functie care face reverse la un string

const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log("Exercise 7:");
console.log(reverseString("Hello"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

const returnFactorialOfPositiveIntegerNumber = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i
    } 
    return result;
}
console.log("Exercise 8:");
console.log(returnFactorialOfPositiveIntegerNumber(5));

//Ex9
//Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

const stringEndComparison = (str1,str2) => {
    const splitString2 = str2.split("");
    for (let i = 1; i <= splitString2.length; i++) {
        if (str1.charAt(str1.length - i) === str2.charAt(str2.length - i)) {
            return "The first string ends with the second string";
        } return "The first string doesn't end with the second string";
    }
}
console.log("Exercise 9:");
console.log(stringEndComparison("Hello World","World"));
console.log(stringEndComparison("Hello World","Worlds"))

//Ex10
//Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul 
//element din array care trece testul specificat

const theCondition = (number) => {
    if (number % 4 === 0) {
        return number;
    }  
}

const returnFirstArrayElementThatMeatsTheCondition = (array,condition) =>{
    for (let i in array) {
        if (condition(array[i])) {
            return array[i];
        }
    }
}
console.log("Exercise 10:");
console.log(returnFirstArrayElementThatMeatsTheCondition([1,3,6,8,9,11], theCondition));

//Ex11
//Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate 
//literele celui de-al doilea string

const stringLetterComparison = (string1,string2) => {
    const splitStr2 = string2.split("");
    for (let i = 0; i < splitStr2.length; i++) {
        if (string1.includes(splitStr2[i])) {
            return "All letters from string 2 could be found in string 1";
        } 
        return "Not all letters from string 2 are found in string 1";
    }
}
console.log("Exercise 11:");
console.log(stringLetterComparison("Hello World Of Development!","love"));
console.log(stringLetterComparison("Hello World Of Development!","zoo"));

//Ex 12
//Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare 
//element al array-ului pana cand intalneste elementul cu valoarea specificata

const returnArrayUntilTheValue = (myArray,theValue) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === theValue) {
            return myArray.slice(0,i);
        }
    }
}
console.log("Exercise 12:");
console.log(returnArrayUntilTheValue(["Banana", "Orange", "Lemon", "Apple", "Mango"],"Apple"));
console.log(returnArrayUntilTheValue(["Banana", "Orange", "Lemon", "Apple", "Mango"],"Mango"));

//Ex 13
//Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
const falsyArray = ["Banana", 0, "Orange", false, "Lemon", "", "Apple", undefined, "Mango", NaN, null];
console.log("Exercise 13:");

// varianta 1
const removeFalseValuesFromArray = (array) => {
    return array.filter(Boolean);
}
console.log("Answer 1:");
console.log(removeFalseValuesFromArray(falsyArray));

// varianta 2
const removeFalseValuesFromArray2 = (array2) => {
    let newArray = [];
    for (let i = 0; i < array2.length; i++) {
        if (array2[i]) {
            const trueElement = array2.splice(i,1).toString();
            newArray.push(trueElement);
        }
    }
    return newArray;
}
console.log("Answer 2:");
console.log(removeFalseValuesFromArray2(falsyArray));


//Ex 14
//Scrieti o functie care repeta un string de n ori specificate

const repeatString = (string,howManyTimes) => {
    let repeatedString = "";
    while (howManyTimes > 0) {
        return repeatedString += string.repeat(howManyTimes);
    }
}
console.log("Exercise 14:");
console.log(repeatString("Hello World!", 5));
