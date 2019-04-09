//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

function emailProtection(email) {
    var splitEmail = email.split("@");
    var splitEmailName = splitEmail[0].split("");
    var newEmailName = "";
    for (var i = 0; i <= 5; i++) {
        newEmailName += splitEmailName[i];
        newEmail = newEmailName + "*****@" + splitEmail[1];
    }
    return newEmail;
}
console.log(emailProtection("ovidiu.grigoras@test.com"))

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function upperCaseEveryFirstLetter(string) {
    var splitString = string.split(" ");
    var finalString = "";
    for (var i = 0; i < splitString.length; i++) {
        var stringUpperCaseFirstLetter = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1) + " ";
        finalString += stringUpperCaseFirstLetter;
    }
    return finalString;
  }
  console.log(upperCaseEveryFirstLetter("i am superman"));

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function switchLetterCapitalization(string) {
    var splitString = string.split("");
    var switchedString = "";
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i].charCodeAt(0) < 95) {
            splitString[i] = splitString[i].toLowerCase();
        } else {
            splitString[i] = splitString[i].toUpperCase();
        }
        switchedString += splitString[i];
    }
    return switchedString;
}
console.log(switchLetterCapitalization("xxXyYzZZ"));
console.log(switchLetterCapitalization("XXxYyZzz"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatString(str,howManyTimes) {
    var finalString = "";
    for (var i = 1; i <= howManyTimes; i++) {
        finalString += str
    }
    return finalString;
}
console.log(concatString("Wantsome", 2));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, 
// the word 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function verifyPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(verifyPalindrome("level"));
console.log(verifyPalindrome("hello"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si 
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

function returnTheLargestNumbersFromComposedArrays(myComposedArray) {
    var finalArray = [];
    for (var i = 0; i < myComposedArray.length; i++) {
        maxNumberFromEachArray = myComposedArray[i].reduce(function(a, b) {
            return Math.max(a, b);
            })
        finalArray.push(maxNumberFromEachArray);
    } 
    return finalArray;
}
console.log(returnTheLargestNumbersFromComposedArrays([[4,8,19,[23]],[13,18,24],[3,17,25]]));

//Ex7
// Implementati o functie care face reverse la un string

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

function returnFactorialOfPositiveIntegerNumber(number) {
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i
    } return result;
}
console.log(returnFactorialOfPositiveIntegerNumber(5));

//Ex9
//Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

function stringEndComparison(str1,str2) {
    var splitString2 = str2.split("");
    for (var i = 1; i <= splitString2.length; i++) {
        if (str1.charAt(str1.length - i) === str2.charAt(str2.length - i)) {
            return "The first string ends with the second string";
        } return "The first string doesn't end with the second string";
    }
}
console.log(stringEndComparison("Hello World","World"));
console.log(stringEndComparison("Hello World","Worlds"))

//Ex10
//Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul 
//element din array care trece testul specificat

var condition = function(number) {
    if (number % 4 === 0) {
        return number;
    }  
}
function returnFirstArrayElementThatMeatsTheCondition(array,cond) {
    for (var i in array) {
        if (cond(array[i])) {
            return array[i];
        }
    }
}

console.log(returnFirstArrayElementThatMeatsTheCondition([1,3,6,8,9,11], condition));

//Ex11
//Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate 
//literele celui de-al doilea string

function stringLetterComparison(string1,string2) {
    var splitStr2 = string2.split("");
    for (var i = 0; i < splitStr2.length; i++) {
        if (string1.includes(splitStr2[i])) {
            return "All letters from string 2 could be found in string 1";
        } 
        return "Not all letters from string 2 are found in string 1";
    }
}
console.log(stringLetterComparison("Hello World Of Development!","love"));
console.log(stringLetterComparison("Hello World Of Development!","zoo"));

//Ex 12
//Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare 
//element al array-ului pana cand intalneste elementul cu valoarea specificata

function returnArrayUntilTheValue(myArray,value) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === value) {
            return slicedArray = myArray.slice(0,i);
        }
    }
}
console.log(returnArrayUntilTheValue(["Banana", "Orange", "Lemon", "Apple", "Mango"],"Apple"));
console.log(returnArrayUntilTheValue(["Banana", "Orange", "Lemon", "Apple", "Mango"],"Mango"));

//Ex 13
//Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
var falsyArray = ["Banana", 0, "Orange", false, "Lemon", "", "Apple", undefined, "Mango", NaN, null];

function removeFalseValuesFromArray(array) {
    return array.filter(Boolean);
}
console.log(removeFalseValuesFromArray(falsyArray));

function removeFalseValuesFromArray2(array2) {
    var newArray = [];
    for (var i = 0; i < array2.length; i++) {
        if (array2[i]) {
            var trueElement = array2.splice(i,1).toString();
            newArray.push(trueElement);
        }
    }
    return newArray;
}
console.log(removeFalseValuesFromArray2(falsyArray));


//Ex 14
//Scrieti o functie care repeta un string de n ori specificate

function repeatString(string,howManyTimesToRepeat) {
    var repeatedString = "";
    while (howManyTimesToRepeat > 0) {
        return repeatedString += string.repeat(howManyTimesToRepeat);
    }
}
console.log(repeatString("Hello World!", 5));
