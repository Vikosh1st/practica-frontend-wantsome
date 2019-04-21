/* Creati o pagina HTML care sa indeplineasca urmatoarele cerinte:
- contine un element de tip checkbox cu textul "I have additional obervations" care "by default" este neselectat;
- in momentul in care utilizatorul selecteaza checkbox-ul, sub acesta va aparea un element textarea care va fi 
selectat "by default" - ceea ce inseamna ca dupa ce fac check, daca textarea apare pe ecran si incep imediat sa scriu de la tastatura, se va scrie text inauntrul textarea 
- contine un element de tip button cu textul "Send feedback"
- in momentul in care utilizatorul apasa pe acest buton, se va face o verificare care valideaza textul din 
cadrul textarea: daca are mai mult de 160 de caractere, se va hasura cu rosu textarea si se va afisa o eroare specifica
- daca textarea nu este afisat sau nu are continut text, butonul de submit trebuit sa fie disabled.

Veti rezolva cerintele de mai sus in doua moduri: 
- folosind appendChild si creand elementul textarea direct din JS */

const div = document.getElementsByTagName("div")[0];
const showTextArea = () => {
    let textarea = document.createElement("textarea");
    if (document.getElementById("checkbox").checked === true) {
        div.appendChild(textarea);
        textarea.setAttribute("rows","5");
        textarea.setAttribute("cols","55");
        textarea.setAttribute("onchange","enableButton()");
        textarea.select();
    } else {
        let child = document.getElementsByTagName("textarea")[0];
        div.removeChild(child);
    }
}

const enableButton = () => {
    let textAdded = document.getElementsByTagName("textarea")[0].value;
    if (textAdded.length > 0) {
        document.getElementById("submitButton").disabled = false;
    }
}

const verifyNumberOfChar = () => {
    let textArea = document.getElementsByTagName("textarea")[0];
    let textAdded = textArea.value;
    let charNo = textAdded.length;
    let error = document.createElement("p");
    error.textContent = "Text added needs to have between 1 and 160 characters";
    if (charNo > 160) {
        textArea.style.backgroundColor = "#ffdddd";
        textArea.style.border = "1px solid red";
        div.appendChild(error);
        error.setAttribute("style","color:red;");
    } else {
        alert("Comment successfully sent");
    }
}
