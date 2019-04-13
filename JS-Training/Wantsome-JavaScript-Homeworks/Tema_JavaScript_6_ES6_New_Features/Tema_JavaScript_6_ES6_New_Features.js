/* Tema pentru Luni: 
- Layout-ul pentru newsfeed app - HTML + CSS
- Un fisier JavaScript care sa includa: 
> Rezolvarea la 5 probleme implementate de catre voi pe codewars.com - Folositi sintaxa ES6
> Rescrieti folosind sintaxa ES6 cate o problema de la temele anterioare de la capitolul JavaScript ( 5 probleme ) */

//Cele 5 exercitii din temele anterioare:
console.log("Cele 5 exercitii din temele anterioare:");
// Ultimul exercitiu din Tema JS 1 - Strings
// Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
const uncapitalize = (str) => {
    let firstLetter = str.charAt(0);
    return firstLetter.toLowerCase() + str.slice(1);
}
console.log(uncapitalize('Js string exercises')); //"js string exercises"

// Primul exercitiu din Tema JS 2 - Function types and Conditions
// Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

const verifySexFromCnp = (CNP) => {
    let sexul = CNP.toString().charAt(0);
    if (sexul === "1" || sexul === "3" || sexul === "5" || sexul === "7" ) {
        return "Persoana verificata este de sexul Masculin";
    } else if ( sexul === "2" || sexul === "4" || sexul === "6" || sexul === "8") {
        return "Persoana verificata este de sexul Feminin";
    } else return "CNP-ul nu este valid";
}
console.log(verifySexFromCnp(1870330));
console.log(verifySexFromCnp(2870330));
console.log(verifySexFromCnp(9870330));

// Primul exercitiu din Tema JS 3 - Loops
/* Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
raporta acest lucru in consola. (exemplu: “2 este numar par”). Scrieti functia in doua variante: while si for */

//Rezolvare using for:
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

//Rezolvare using while:
let a = -1; // var text a fost declarat mai sus
while (a < 20) {
    a++;
    if (a % 2 == 0) { 
        text += a + " este numar par" + "\n";
        continue;
    }
    text += a + " este numar impar" + "\n";
}

//console.log(text)

// Ultimul exercitiu din Tema JS 4 - Basic Algorithms
//Scrieti o functie care repeta un string de n ori specificate

const repeatString = (string,howManyTimesToRepeat) => {
    let repeatedString = "";
    while (howManyTimesToRepeat > 0) {
        return repeatedString += string.repeat(howManyTimesToRepeat);
    }
}
console.log(repeatString("Hello World! ", 5));

// Ultimul exercitiu din Tema JS 5 - ES6 Variables
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul 
// string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (string1,string2) => {
    let str1RemoveSpaces = string1.toLowerCase().split(" ");
    let str2RemoveSpaces = string2.toLowerCase().split(" ");
    let str1Split = str1RemoveSpaces.join("").split("");
    let str2Split = str2RemoveSpaces.join("").split("");
    let str1Sorted = str1Split.sort().join("");
    let str2Sorted = str2Split.sort().join("");
    return (str1Sorted === str2Sorted) ? true : false; 
}
console.log(isAnagram("School master","The class room"));
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("silentio", "listen"));

// Cele 5 exercitii de pe Codewars::
console.log("Cele 5 exercitii de pe Codewars:");

/* 1. Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.*/

const getCount = (str) => {
    let vowelsCount = 0;
    let splitStr = str.split(""); 
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === "a" || splitStr[i] === "e" || splitStr[i] === "i" || splitStr[i] === "o" || splitStr[i] === "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(getCount("everyone loves frontend development"));

/* 2. The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with 
an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps 
range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.
Note for F#: The input will be of (int list list) which is a List<List>
Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be 
placed in the senior or open category.
Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"] */

const openOrSenior = (data) => {
    let members = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            members.push("Senior");
            continue
        } 
        members.push("Open");
    }
    return members;
}
console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))

/* 3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list 
with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

const filterList = (l) => {
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            newArr.push(l[i]);
        }
        continue;
    }
    return newArr;
}
console.log(filterList([1,2,'a','b']));
console.log(filterList([1,2,'aasf','1','123',123]));

/* 4. Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent 
number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably 
sleeping there :D. Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people 
in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

const numberOfPeopleLeft = (busStops) => {
    let number = 0;
    for (let i = 0; i < busStops.length; i++) {
        number += busStops[i][0] - busStops[i][1]
    }
    return number;
}
console.log(numberOfPeopleLeft([[10,0],[3,5],[5,8]]));
console.log(numberOfPeopleLeft([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));

/* 5. You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to 
an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a 
Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know 
it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you
will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting 
point. Return false otherwise.
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).*/

const isValidWalk = (walk) => {
    let x = 0;
    let y = 0;
    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': y--; 
            break;
            case 's': y++; 
            break;
            case 'w': x--; 
            break;
            case 'e': x++; 
            break;
        }
    }
    return walk.length === 10 && x === 0 && y === 0
}