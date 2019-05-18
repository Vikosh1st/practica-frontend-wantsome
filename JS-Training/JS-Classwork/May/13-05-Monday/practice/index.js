function capitalizaNames(arr) {
    const lowercaseNames = arr.map((name) => {
        const lowerName = name.toLowerCase();
        return lowerName.charAt(0).toUpperCase() + lowerName.slice(1,lowerName.length);
    })
    return lowercaseNames;
}
console.log(capitalizaNames(["john","JACOB","csSDSERG"]));

function doubleEachNumber(arr) {
    const ifNumber = arr.map((item) => {
        if (typeof item === "number") {
            return item * 2;
        }
        return item;
    } )
    return ifNumber;
}
console.log(doubleEachNumber([35,"jaja",15,2,43,"Ovidiu"]));

function getPersonNames(arr) {
    const fullName = arr.map((item) => {
        return `${item.name} ${item.surname}`
    });
    return fullName;
}
console.log(getPersonNames([{
    name: "Angelina",
    surname: "Jolie",
    age: 40
},{
    name: "Eric",
    surname: "Jones",
    age: 27
}]));

function computeExamPass(arr){
    const mapGrade = arr.map((item) => {
        if (item.grade >= 5) {
            return `${item.name} ${item.surname} has passed the exam`
        }
        return `${item.name} ${item.surname} has not passed the exam`
    });
    return mapGrade
}

console.log(computeExamPass([{
    name: "Angelina",
    surname: "Jolie",
    grade: 7
},{
    name: "Eric",
    surname: "Jones",
    grade: 3
},
]));

function getPersonsDomElements(arr){
    const addDOMElements = arr.map((item) => {
        const fullName = `${item.name} ${item.surname}`;
        const heading1 = document.createElement("h1");
        const heading2 = document.createElement("h2");
        heading1.textContent = fullName;
        heading2.textContent = `${item.age}`;
        document.getElementById("Person").appendChild(heading1);
        document.getElementById("Person").appendChild(heading2);
    })
    return addDOMElements;
}

getPersonsDomElements([{
    name: "Angelina",
    surname: "Jolie",
    age: 80
},{
    name: "Eric",
    surname: "Jones",
    age: 27
},
]);