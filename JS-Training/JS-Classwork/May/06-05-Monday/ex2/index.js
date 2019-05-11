const Person = function () {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() 
//ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

let trainer = new Person();
trainer.prototype = new Person();
trainer.prototype.teach = function(subject) {
    return this.name + " is now teaching " + subject;
}
console.log(trainer.prototype)

let Ovi = new trainer()

Ovi.initialize("Ovi", 29);
Ovi.teach("Prototypes");

