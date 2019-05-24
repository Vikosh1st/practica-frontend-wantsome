// Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). 
/// Prima functie, capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o 
// operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta 
// cuvintele in ordine alfabetica. 
// In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, 
// se va face reject

const capitalizeWords = (arr) => {
    const capitalizePromise = new Promise ((resolve,reject) => {
        const capitalizedWords = arr.map((word) => {
            if (typeof word !== "string") {
                reject(new Error("Your word is not a string"))
            }
            return word[0].toUpperCase() + word.slice(1);
        });
        resolve(capitalizedWords);
    });
    return capitalizePromise;
}

const sortWords = (capitalizedWords) => {
    const sortedWordsPromise = new Promise((resolve,reject) => {
        const orderedWords = capitalizedWords.sort();
        resolve(orderedWords);
    });
    return sortedWordsPromise;
}

const testArray = ["frontend","wantsome","victor"];
capitalizeWords(testArray).then(sortWords).then(response => console.log(response));
