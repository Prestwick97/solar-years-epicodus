// Business Logic
export class PlanetaryYears {
  constructor(earthAge, planetAge) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
  }
  mercuryAge() {
    this.planetAge = this.earthAge/0.24
  }
};
