//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function(string){
    const arr = string.split("");
    const usingMap = arr.map((item) => {
        const newCharCode = item.charCodeAt() + 1;
        const newItem = String.fromCharCode(newCharCode);
        return newItem;
    });
    return usingMap;
}
console.log(moveLetters("Hello"));
console.log(moveLetters("abcxy"));
// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function(string){
    const arr = string.split(" ");
    const usingMap = arr.map((item, index) => {
        if (index % 2 === 0) {
            return item.toUpperCase();
        }
        return item;
    });
    return usingMap;
}
console.log(changeWordCase('hey ppl, lets learn javascript together'))