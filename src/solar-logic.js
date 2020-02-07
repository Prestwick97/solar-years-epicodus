// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
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
