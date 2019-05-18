// ex3
// Faceti asftel incat toate variabilele de mai jos sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
];
    
let allCats = arr.filter((item) => {
    if (item.species === "cat") {
        return item;
    }
});
console.log(allCats);

let allHumans = arr.filter((item) => {
    if (item.species === "human") {
        return item;
    }
});
console.log(allHumans);

let allFemales = arr.filter((item) => {
    if (item.sex === "f") {
        return item;
    }
});
console.log(allFemales);

let totalOfAllAges = arr.reduce((acumulator,item) => acumulator + item.age,0);
console.log(totalOfAllAges);

let averageAgeOfCats = allCats.reduce((acumulator,item) => acumulator + item.age,0) / allCats.length;
console.log(averageAgeOfCats);

let averageAgeOfHumans = allHumans.reduce((acumulator,item) => acumulator + item.age,0) / allHumans.length;
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr.reduce((acumulator,item) => acumulator + item.name.length,0) / arr.length;
console.log(avgLengthOfNames);