class Car {
  constructor(make, model, year, mpg, topSpeed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mpg = mpg;
    this.topSpeed = topSpeed;
  }
  speed = 0;
  accelerate = function (variation) {
    if (this.speed <= this.topSpeed) {
      this.speed += variation;
      if (this.speed > this.topSpeed) {
        this.speed = 120;
      }
    }
  };
  decelarate = function (variation) {
    if (this.speed > 0) {
      this.speed -= variation;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

const tundra = new Car("Toyota", "Tundra", 2004, 14, 120);
console.log(tundra.speed); // 0
tundra.accelerate(20);
console.log(tundra.speed); // 20
tundra.decelarate(30);
console.log(tundra.speed); // 0


//A car should have the following properties: maker(string), model(string), year(number), mpg(number), topSpeed(number), currentSpeed(number - should start off as 0; must be >= 0 at all times.).
//A car should have the following method's on it's prototype: accelerate(takes a number to add to currentSpeed), decelarate(takes a number to subtract from currentSpeed)
