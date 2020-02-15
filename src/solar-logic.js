// Business Logic
export class PlanetaryYears {
  constructor(earthAge, lifeExpectancy,) {
    this.earthAge = earthAge;
    this.planetAge = planetAge;
    this.planetDif = [0.24, 0.62, 1.88, 11.86];
    this.planetExpectancy = planetExpectancy;
    this.lifeExpectancy = lifeExpectancy;
    this.planetRemainder = planetRemainder;
    // this.mercuryDif = 0.24;
    // this.venusDif = 0.62;
    // this.marsDif = 1.88;
    // this.jupiterDif = 11.86;
  }
  mercuryAge() {
    this.planetAge = this.earthAge / this.planetDif[0];
  }
  venusAge() {
    this.planetAge = this.earthAge / this.planetdif[1];
  }
  marsAge() {
    this.planetAge = this.earthAge / this.planetdif[2];
  }
  jupiterAge() {
    this.planetAge = this.earthAge / this.planetdif[3];
  } 
  planetaryExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif; 
  }
  ExpectancyRemainder() {
    this.planetRemainder = this.planetExpectancy - this.planetAge; 
  }
  calculateMercury() {
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


