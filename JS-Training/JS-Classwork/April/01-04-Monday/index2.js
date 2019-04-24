/* Completati functia stream. Trebuie sa:
● accepte ca argumente 2 functii: conditionalFn, actionFn.
● apeleaza actionFn pana cand conditionalFn returneaza fals
● nu returneaza nimic
 */

//Exemplu 1:
conditionalFn = function() { return false; };
actionFn = function() { console.log("Vreau sa ies la tabla!"); };
stream(conditionalFn, actionFn); // Nu afiseaza nimic
// Exemplu 2:
counter = 10;
conditionalFn = function() {
 counter--;
 return counter >= 0;
};
stream(conditionalFn, actionFn); // Afiseaza “Vreau sa ies la tabla” de 10 ori

function stream(fn1,fn2) {
    while (fn1 == true) {
        fn2();
        
    } 
}