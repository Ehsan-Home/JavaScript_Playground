class Car {
  color;
  size;
  numberOfWheels;
  year;

  constructor(color, size, numberOfWheels, year) {
    this.color = color;
    this.size = size;
    this.numberOfWheels = numberOfWheels;
    this.year = year;
  }

  getColor() {
    return this.color;
  }

  setYear(year) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

let BMW = new Car("Blue", "Small", 4, 1956);
console.log(BMW.getColor());
BMW.setYear(1999);
console.log(BMW.getYear());
