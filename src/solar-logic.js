// Business Logic
export class PlanetaryYears {
  constructor(earthAge, lifeExpectancy,) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.planetDif = planetDif;
    this.planetExpectancy = planetExpectancy;
    this.lifeExpectancy = lifeExpectancy;
    this.planetRemainder = planetRemainder;
    this.mercuryDif = 0.24;
    this.venusDif = 0.62;
    this.marsDif = 1.88;
    jupiterDif = 11.86;
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
  calculateMercury() {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.planetaryAge();
    planetaryYears.planetaryExpectancy();
    planetaryYears.ExpectancyRemainder();
  }
  calculateVenus() {
    PlanetaryYears.planetaryAge();
    PlanetaryYears.planetaryExpectancy();
    PlanetaryYears.ExpectancyRemainder();
  }
  calculateMars() {
  PlanetaryYears.planetaryAge();
  PlanetaryYears.planetaryExpectancy();
  PlanetaryYears.ExpectancyRemainder();
  }
  calculateJupiter() {
    PlanetaryYears.planetaryAge();
    PlanetaryYears.planetaryExpectancy();
    PlanetaryYears.ExpectancyRemainder();
  }
};


