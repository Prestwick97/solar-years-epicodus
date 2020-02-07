// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.lifeExpectancy = lifeExpectancy;
  }
  mercuryAge() {
    this.planetAge = this.earthAge/0.24;
  }
  venusAge() {
    this.planetAge = this.earthAge/0.62;
  }
  marsAge() {
    this.planetAge = this.earthAge/1.88;
  }
  jupiterAge() {
    this.planetAge = this.earthAge/11.86;
  }

};
