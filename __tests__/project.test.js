import { PlanetaryYears } from "./../src/solar-logic"

describe('mercuryAge', () => {
  describe('should correctly provide age on mercury with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.mercuryYears()).toEqual(91.6)
  })
})