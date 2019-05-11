function wantsomeStudent(firstName,lastName,age,phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phone;
    this.getName = function() {return this.firstName + " " + this.lastName;};
    this.shownumber = function() {return "Numarul de telefon este: " + this.phoneNumber;};
    this.ageToRetire = function() {return (50 - this.age);};
}

const Ovidiu = new wantsomeStudent("Ovidiu","Grigoras",29,744000111);
const Lucian = new wantsomeStudent("Lucian","Ailenei",27,744000112);
const Victor = new wantsomeStudent("Victor","Bondariu",32,744000113);

console.log(Ovidiu);
console.log(Lucian);
console.log(Victor.getName());
