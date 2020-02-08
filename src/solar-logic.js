// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge, planetDif, lifeExpectancy, planetExpectancy, planetRemainder) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.planetDif = planetDif;
    this.planetExpectancy = planetExpectancy;
    this.lifeExpectancy = lifeExpectancy;
    this.planetRemainder = planetRemainder;
  }
  planetaryAge() {
    this.planetAge = this.earthAge / this.planetDif;
  }
  planetaryExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif; 
  }
  ExpectancyRemainder() {
    this.planetRemainder = this.planetExpectancy - this.planetAge; 
  }
  mercuryDif() {
    this.planetDif = 0.24;
  }
  venusDif() {
    this.planetDif = 0.62;
  }
  marsDif() {
    this.planetDif = 1.88;
  }
  jupiterDif() {
    this.planetDif = 11.86;
  }

};
