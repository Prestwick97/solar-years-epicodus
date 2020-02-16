// Business Logic
export class PlanetaryYears {
  constructor(earthAge, lifeExpectancy) {
    this.earthAge = earthAge;
    this.lifeExpectancy = lifeExpectancy;
    this.planetDif = [0.24, 0.62, 1.88, 11.86];
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
  mercuryExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif[0]; 
  }
  venusExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif[1]; 
  }
  marsExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif[2]; 
  }
  jupiterExpectancy() {
    this.planetExpectancy = this.lifeExpectancy / this.planetDif[3]; 
  }
  expectancyRemainder() {
    if(this.planetAge > this.planetExpectancy){
      this.planetExcess = this.planetAge - this.planetExpectancy;
      // return "Congratulations! You've servived" + this.planetExcess + "years past your life expectancy on this planet!";
    } else {
      this.planetRemainder = this.planetExpectancy - this.planetAge;
    }
  }

  // calculateMercury() {
  //   planetaryYears.planetaryAge();
  //   planetaryYears.planetaryExpectancy();
  //   planetaryYears.ExpectancyRemainder();
  // }
  // calculateVenus() {
  //   PlanetaryYears.planetaryAge();
  //   PlanetaryYears.planetaryExpectancy();
  //   PlanetaryYears.ExpectancyRemainder();
  // }
  // calculateMars() {
  // PlanetaryYears.planetaryAge();
  // PlanetaryYears.planetaryExpectancy();
  // PlanetaryYears.ExpectancyRemainder();
  // }
  // calculateJupiter() {
  //   PlanetaryYears.planetaryAge();
  //   PlanetaryYears.planetaryExpectancy();
  //   PlanetaryYears.ExpectancyRemainder();
  // }
};


