//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const composedValue = (func1,func2,number) => {
    return func1(func2(number));
}

const square = (n) => {
    return n * n;
}

const double = (n) => {
    return n * 2;
}
console.log("ex1:");
console.log(composedValue(square, double, 5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (...fn) => fn.reduce((func1,func2) => (...args) => func1(func2(...args)));
const myFunction = compose(square, double)

console.log("ex2:");
console.log(myFunction(5));
console.log(myFunction(10));

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza 
// doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const find = (arr,fn) => {
    const filterArray = arr.filter((item) => {
        return fn(item)
    })
    return filterArray;
}

const isOdd = (number) => {
    if (number % 2 !== 0) {
        return number
    }
}
console.log("ex3:");
console.log(isOdd(2));
console.log(find([1,2,3,4,5], isOdd))