const section = document.querySelector("section");
const requestUrl = "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";

const request = new XMLHttpRequest();
request.open("GET",requestUrl);
request.responseType = "json";
request.send();

request.onload = function() {
    const colorsJson = request.response;
    console.log(colorsJson)
    populateColorList(colorsJson);
}

const populateColorList = (jsonObj) => {
    const myList = document.createElement("ul");
    for (let key in jsonObj) {
        const itemList = document.createElement("li");
        const colorBox = document.createElement("span");
        const paragraph = document.createElement("p");
        
        paragraph.textContent = key;
        colorBox.style.backgroundColor = jsonObj[key];

        itemList.appendChild(colorBox);
        itemList.appendChild(paragraph);
        myList.appendChild(itemList);
    }

    section.appendChild(myList);
}

