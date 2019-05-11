  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

function constructor(driver,speed) {
    this.driver = driver;
    this.speed = speed;
    this.drive = function(mph) {
        this.speed = mph;
        return this.driver + " driving at " + mph  + " miles per hour";
    }
}

const Vehicle = new constructor("driver",0);
const Car = new constructor("driver",0);
const Truck = new constructor("driver",0);

Truck.cargo = [];
Truck.loadCargo = function(cargo) {
    this.cargo.push(cargo);
    return this;
};
Truck.unloadCargo = function() {
    return this.cargo.pop();
};

console.log(Vehicle);
console.log(Car);
console.log(Truck.loadCargo(1));
console.log(Truck.unloadCargo());
