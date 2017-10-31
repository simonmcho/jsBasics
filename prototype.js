//all function expressions are constructors

//Showing Prototypes
var Car = function(name, year) {
  this.name = name;
  this.year = year;
  this.getName = function() {
    return this.name;
  }
}
var honda = new Car("Honda", 1999);

console.log(honda.getName());

Car.prototype.getYear = function() {//can add to prototype the function getYear
  return this.year;
}

console.log(honda.getYear());
