// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge, planetDif, lifeExpectancy, planetExpectancy) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.planetDif = planetDif;
    this.planetExpectancy = planetExpectancy;
    this.lifeExpectancy = lifeExpectancy;
  }
  planetaryAge() {
    this.planetAge = this.earthAge / this.planetDif;
  }
  planetaryEcpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif; 
  }
  ExpectancyRemainder() {
    this.planetAge - this.planetExpectancy; 
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
