//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

document.getElementById("exButton").addEventListener("click", postTheGossip);


//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

function postTheGossip() {
    let story = "";
    let nume = document.getElementById("name").value;
    let adjectiv = document.getElementById("adjective").value;
    let randomWord = document.getElementById("random-word").value;
    story = "Ma numesc " + nume + ", sunt " + adjectiv + " si " + randomWord;
    const solutie = document.getElementById("story");
    solutie.innerHTML = story;
    return story;
}


