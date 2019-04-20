//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

const sqrNum = () => {
    let square = document.getElementById("square").value;
    let sol = square * square;
    let solutia
    square.innerHTML = solutia;
    
    
    return sol
}

const halfNum = () => {
    let half = document.getElementById("half").value;
}

const percentNum = () => {
    let percent1 = document.getElementById("percent1").value;
    let percent2 = document.getElementById("percent2").value;
}

const areaCircle = () => {
    let area = document.getElementById("area").value;
}



//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

document.getElementById("sqr-btn").addEventListener("click", sqrNum);
document.getElementById("half-btn").addEventListener("click", halfNum);
document.getElementById("prc-btn").addEventListener("click", percentNum);
document.getElementById("area-btn").addEventListener("click", areaCircle);


//3
// Bonus: faceti sa functioneze si la key press pe langa click
