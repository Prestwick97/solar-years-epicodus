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
  mercuryAge() {
    this.planetDif = 0.24;
  }
  venusAge() {
    this.planetDif = 0.62;
  }
  marsAge() {
    this.planetDif = 1.88;
  }
  jupiterAge() {
    this.planetDif = 11.86;
  }
};
