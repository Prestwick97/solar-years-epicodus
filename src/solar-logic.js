// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge, planetDif, lifeExpectancy) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.planetDif = planetDif;
    this.lifeExpectancy = lifeExpectancy;
  }
  planetaryAge() {
    this.planetAge = this.earthAge / this.planetDif;
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
  planetaryEcpectancy() {
    this.lifeExpectancy
  }
};
