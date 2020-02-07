// Business Logic
class PlanetaryYears {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }
  mercuryYears() {
    this.mercuryAge = this.earthAge / 0.24
  }
}
