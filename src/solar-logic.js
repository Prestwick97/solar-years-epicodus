// Business Logic
export class PlanetaryYears {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.planetDif = [0.24, 0.62, 1.88, 11.86];
  }
  planetAge(difNum) {
    this.planetAge = this.earthAge / this.planetDif[difNum];
  }
  planetExpectancy(difNum) {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif[difNum]; 
  }
  expectancyRemainder() {
    if(this.planetAge > this.planetExpectancy){
      this.planetExcess = this.planetAge - this.planetExpectancy;
      // return "Congratulations! You've servived" + this.planetExcess + "years past your life expectancy on this planet!";
    } else {
      this.planetRemainder = this.planetExpectancy - this.planetAge;
    }
  }
};


