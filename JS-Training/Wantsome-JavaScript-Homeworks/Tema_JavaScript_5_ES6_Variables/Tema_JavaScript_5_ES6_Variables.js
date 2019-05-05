//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale
// sa-mi imulteasca suma lor cu 5. ex myFunction(10, 5) - outpot 15 / myFunction(10,10) - output 100

const returnSum = (a,b) => {
    if (a !== b) {
      return a + b;
    } 
    return (a + b) * 5;
}
console.log("Ex1:");
console.log(returnSum(10,5));
console.log(returnSum(10,10));
  
//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este
// egala cu 30:
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
  
const equalTo30 = (a,b) => {
    if (a === 30 && b === 30) {
        return true;
    } else if (a + b === 30) {
        return true;
    } else {
        return false;
    }
}
console.log("Ex2:");
console.log(equalTo30(30,30));
console.log(equalTo30(15,15));
console.log(equalTo30(10,15));
  
//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel
// string, iar daca nu incepe, sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
  
const addJsToYourString = (str) => {
    if (str) {
        if (str.charAt(0) === "J" && str.charAt(1) === "S") {
            return str;
        } else {
            return "JS" + str;
        }
        } else {
            return "JS";
        }
}
console.log("Ex3:");
console.log(addJsToYourString('JSisAwesome'));
console.log(addJsToYourString('isEasy'));
console.log(addJsToYourString(null));
  
//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const removeDuplicates = (str) => {
    let array = str.toString().split("");
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array.join("");
}
console.log("Ex4:");
console.log(removeDuplicates('aabcdeef'));
console.log(removeDuplicates(122334));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const findLongestWordInAString = (str) => {
    let splitStr = str.split(" ");
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
console.log("Ex5:");
console.log(findLongestWordInAString("Wantsome is Awesomeeee today"));
console.log(findLongestWordInAString("Wantsome is Awesome today"));
console.log(findLongestWordInAString("Wantsome is Awesome todayyyyy"));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const returnRepeatedStar = () => {
    let str = "* ";
    let result = "";
    let i = 0;
    do {
        i += 1;
        result = str.repeat(i);
        console.log(result);
    } while (i < 5);
}
console.log("Ex6:");
returnRepeatedStar();

//ex7
const negativeNumbers = [];
const extractNegativeNumbers = (numbers) => {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }   
}
extractNegativeNumbers([1,2,-5,4,-6]);
console.log("Ex7:");
console.log(negativeNumbers);

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator 
// - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const returnRezultFromCalculation = (a,b,operator) => {
    let result = new Number();
    switch (true) {
        case operator === "add":
            result = a + b;
        break;
        case operator === "substract":
            result = a - b;
        break;
        case operator === "multiply":
            result = a * b;
        break;
        case operator === "divide":
            result = a / b;
        break;
    }
    return result;
}
console.log("Ex8:");
console.log(returnRezultFromCalculation(2, 5, "add"));
console.log(returnRezultFromCalculation(10, 8, "substract"));
console.log(returnRezultFromCalculation(10, 4, "multiply"));
console.log(returnRezultFromCalculation(9, 3, "divide"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze
// "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const isDiv = (number) => {
    let result = new String();
    switch (true) {
        case number % 3 === 0 && number % 5 === 0:
            result = "BOTH";
        break;
        case number % 3 === 0:
            result = "THREE";
        break;
        case number % 5 === 0:
            result = "FIVE";
        break;
        default:
            result = number;
    }
    return result;
}
console.log("Ex9:");
console.log(isDiv(15));
console.log(isDiv(9));
console.log(isDiv(7));

//Master exercises
console.log("Master exercises:");

//Ex10 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

const returnDateAndTime = (number) => {
    let currentDate = new Date();
    let daysOfWeek = [ "Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
    let ordinalDateWithDayOfWeek = "Azi este: " + daysOfWeek[currentDate.getDay()];
    let ampm ="";
    if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
        ampm = "AM";
    } else {
        ampm = "PM";
    }
    let timestamp = "Ora este: " + currentDate.getHours() + " " + ampm +  " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
    return ordinalDateWithDayOfWeek + "\n" + timestamp;
}
console.log("Ex10:");
console.log(returnDateAndTime());

//ex11
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true 
// daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = (pin) => {
    if (isNaN(pin)) {
        return false;
    } else { 
        if (pin.length === 4 || pin.length === 6) {
            return true;
        } else {
            return false;
        }
    }
}
console.log("Ex11:");
console.log(validPin("1234"));
console.log(validPin("12345"));
console.log(validPin("z23f"));


//ex12
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

const removeVowels = (str) => {
    return str.replace(/[aeiou]/gi, '');
}
console.log("Ex12:");
console.log(removeVowels("Hey I am developer"));

//ex13
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

const isSquareNumber = (number) => {
    return number > 0 && Math.sqrt(number) % 1 === 0;
}
console.log("Ex13:");
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));
console.log(isSquareNumber(9));

//ex14
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul 
// string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

const isAnagram = (string1,string2) => {
    let str1 = string1.toLowerCase();
    let str2 = string2.toLowerCase();
    let str1RemoveSpaces = str1.split(" ");
    let str2RemoveSpaces = str2.split(" ");
    let str1Split = str1RemoveSpaces.join("").split("");
    let str2Split = str2RemoveSpaces.join("").split("");
    let str1Sorted = str1Split.sort().join("");
    let str2Sorted = str2Split.sort().join("");
    if (str1Sorted === str2Sorted) {
        return true;
    } else {
        return false; 
    }   
}
console.log("Ex14:");
console.log(isAnagram("School master","The class room"));
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("silentio", "listen"));