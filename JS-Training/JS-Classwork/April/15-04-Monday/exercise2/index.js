const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
    }];
  
// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
// Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
let paragraph = "";
for (let i = 0; i < books.length; i++) {
    paragraph += books[i].title + " written by " + books[i].author + "\n";
    console.log(paragraph)
}
const p = document.createElement("p");
p.textContent = paragraph;
document.body.appendChild(p);
// BONUS: folositi ul si li pentru a face display la carti

// BONUS: adaugati o proprietate pentru fiecare carte cu URL de la 
// coverul cartii si adaugati un element img pentru fiecare
// (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
// BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.