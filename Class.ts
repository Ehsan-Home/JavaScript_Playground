class CarTS {
    size:number;
    color:string;
    
    numberOfWheels:number;
    year:number;
  
    constructor(color:string, size:number, numberOfWheels:number, year:number) {
      this.color = color;
      this.size = size;
      this.numberOfWheels = numberOfWheels;
      this.year = year;
    }
  
    getColor() {
      return this.color;
    }
  
    setYear(year:number) {
      this.year = year;
    }
  
    getYear() {
      return this.year;
    }
  }
  
  let BMWTS = new CarTS("Blue", 145, 4, 1956);
  console.log(BMWTS.getColor());
  BMWTS.setYear(1999);
  console.log(BMWTS.getYear());
  