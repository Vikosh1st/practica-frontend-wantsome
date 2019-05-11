const form = document.querySelector("form");
form.onsubmit = function (submitEvent) {
  // luati numele cartii din input
  submitEvent.preventDefault();
  const name = document.querySelector('input').value
  const urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${name}`
    
  //apelati API-ul si folositi functia resultOfBooks ca si handler pentru raspunsul primit
  const request = new XMLHttpRequest();
  request.open("GET", urlQuery);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    resultsOfBooks(request.response);
  }
};

function resultsOfBooks(response) {
  //schimbati argumentele in functia de mai jos astfel incat sa primeasca response si o functie de tip care sa fie apelata ca si callback - displayBookParagraph 
  // displayDetailsWithCallback(response,displayBookParagraph);
  addBooksToPage(response, displayBookBox)
}

/* function displayDetailsWithCallback (books, callback) {
 // up to 4 books 
  const booksArray = books.items.slice(0,4);
  console.log(booksArray);
  for (let i = 0; i < booksArray.length; i++) {
    callback(booksArray[i].volumeInfo.title);
  }
 // detaliile le gasiti in volumeInfo - cautati prin obiectul principal folosind console.log()
 // stocati detaliile in variabile folosind const sau let
} 

function displayBookParagraph(book) {
  console.log(book);
  let paragraphBook = document.createElement("p");
  paragraphBook.textContent = book;
  document.querySelector(".custom-input").appendChild(paragraphBook);
 // formati un text de genul 'cele 4 carti citite sunt: titlu1 titlu2 titlu3 titlu4'
  // inserati intr-un paragraph textul format
} */

function addBooksToPage(books, callback) {
  const booksArray = books.items;
  console.log(booksArray);
  for (let i = 0; i < booksArray.length; i++) {
    callback(booksArray[i].volumeInfo.title, 
      booksArray[i].volumeInfo.publisher,
      booksArray[i].volumeInfo.publishedDate,
      booksArray[i].volumeInfo.pageCount,
      booksArray[i].volumeInfo.language,
      booksArray[i].volumeInfo.imageLinks.thumbnail,
      booksArray[i].volumeInfo.description);
  }
  // BONUS 1
  // Sa se afiseze pe pagina detalii precum title, publisher, publishDate, pages, language si thumbnail-ul(imaginea) cartii
  //Bonus 2 - afisati si descrierea - description - iar daca descrierea e mai lunga de 15 cuvinte, adaugati "..."
  //exemplu : Describes the COMPASS model for working with preschool and elementary...
}

function displayBookBox(title,publisher,publishedDate,pages,language,image,description) {
  console.log(description);
  let paragraphTitle = document.createElement("h2");
  let paragraphPublisher = document.createElement("p");
  let paragraphPublishedDate = document.createElement("p");
  let paragraphPageCount = document.createElement("p");
  let paragraphLanguage = document.createElement("p");
  let imageElem = document.createElement("img");
  imageElem.setAttribute("src",image);
  let paragraphDescription = document.createElement("p");
  paragraphTitle.textContent = title;
  paragraphPublisher.textContent = "Published by: " + publisher;
  paragraphPublishedDate.textContent = "Published on: " + publishedDate;
  paragraphPageCount.textContent = "Page Count: " + pages;
  paragraphLanguage.textContent = "Language: " + language;
  paragraphDescription.textContent = "Description: " + truncateDescription(description);
  document.querySelector("#app").appendChild(imageElem);
  document.querySelector("#app").appendChild(paragraphTitle);
  document.querySelector("#app").appendChild(paragraphPublisher);
  document.querySelector("#app").appendChild(paragraphPublishedDate);
  document.querySelector("#app").appendChild(paragraphPageCount);
  document.querySelector("#app").appendChild(paragraphLanguage);
  document.querySelector("#app").appendChild(paragraphDescription);
}

const truncateDescription = (description) => {
  if (description !== undefined) {  
    const descArray = description.split(" ");
    if (descArray.length > 15) {
      newDescription = descArray.splice(0,15).join(" ") + "...";
      return newDescription;
    }
  }
}