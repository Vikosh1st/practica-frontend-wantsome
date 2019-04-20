function greaterNumber(a,b) {
    if (a > b){
        return "Numarul mai mare dintre " + a + " si " + b + " este " + a;
    } else {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + b;
    }
}

console.log(greaterNumber(5,10));
console.log(greaterNumber(10,5));


function biggerThan(x,y) {
    var result = greaterNumber(x,y);
    return result;
}

console.log(biggerThan(23,49));

var expresion = function biggerThan(x,y) {
        var result = greaterNumber(x,y);
        return result;
    }

console.log(expresion(22,56));

var helloWorldInLang = function(language) {
    if (language === "en") {
        return "Hello World";
    } else if (language === "es") {
        return "Hola Mundo";
    } else if (language === "de") {
        return "Hallo Welt";
    } else return "Hello World";
}

console.log(helloWorldInLang("en"));
console.log(helloWorldInLang("es"));
console.log(helloWorldInLang("de"));
console.log(helloWorldInLang());


var helloWorldInDifLang = function(language) { switch(language) {
    case "en":
        return "Hello World";
        break;
    
    case "es":
        return "Hola Mundo";
        break;

    case "de":
        return "Hallo Welt";
        break;

    default:
        return "Hello World";
}}

console.log(helloWorldInDifLang("en"));
console.log(helloWorldInDifLang("es"));
console.log(helloWorldInDifLang("de"));
console.log(helloWorldInDifLang());




var helloWorldInDiffLang = function(code) {
    var language = {
        "en": "Hello World",
        "es": "Hola Mundo",
        "de": "Hallo Welt"
    }
    return language[code];
}
console.log(helloWorldInDiffLang("en"));
console.log(helloWorldInDiffLang("es"));
console.log(helloWorldInDiffLang("de"));


function pluralize(subst,number) {
    
    if (number === 1) {
        return "1 " + subst;
    } else {
        if (subst === "sheep") {
            return number + " sheeps";
        }
        if (subst === "goose") {
            return number + " geese";
        }
    }
}

console.log(pluralize("sheep",1));
console.log(pluralize("sheep",3));
console.log(pluralize("goose",1));
console.log(pluralize("goose",3));

function computeTaxes(venitAnual) {
    switch(true) {
        case venitAnual < 30000: 
            return 0;
        break;
        case venitAnual > 50000 && venitAnual < 99999:
            return venitAnual * 0.35;
        break;
        case venitAnual > 100000:
            return venitAnual * 0.4;
        break; 
    }
}

console.log(computeTaxes(55555));



var isDateInWeekend = function(date) {
    var parsedDate = new Date(date);
    var indexOfDay = parsedDate.getDay();
    return [5,6].includes(indexOfDay);
}
console.log(isDateInWeekend("Nov 18, 2017"))
